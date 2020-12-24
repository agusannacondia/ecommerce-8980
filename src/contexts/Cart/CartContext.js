import firebase from "firebase/app";
import React, { useState } from "react";
import { getFirestore } from "../../config/firebaseConfig";

const CartContext = React.createContext();

const CartProvider = ({ defaultValue = [], children }) => {
  // eslint-disable-next-line
  const [articles, setArticles] = useState(defaultValue);
  const [items, setItems] = useState(defaultValue);
  const [categories, setCategories] = useState(defaultValue);
  const [item, setItem] = useState(null);
  const [order, setOrder] = useState(null);

  const itemExistsInOrder = (order, article) => {
    var response = false;

    if (!order || !order.items || order.items.length === 0) return false;

    order.items.forEach((item) => {
      if (item.item === article.id) {
        response = true;
      }
      return;
    });

    return response;
  };

  const addArticle = (article) => {
    //setArticles([...articles, article]);

    var existsInOrder = itemExistsInOrder(order, article);

    setOrder({
      ...order,
      items: order
        ? existsInOrder
          ? order.items.map((item) => {
              if (item.item === article.id) {
                item.quantity += article.quantity;
                item.subtotal += article.price * article.quantity;
              }
              return item;
            })
          : [
              ...order.items,
              {
                currency: "ARS",
                item: article.id,
                price: article.price,
                quantity: article.quantity,
                subtotal: article.price * article.quantity,
                thumbnail: article.thumbnail,
                title: article.title,
              },
            ]
        : [
            {
              currency: "ARS",
              item: article.id,
              price: article.price,
              quantity: article.quantity,
              subtotal: article.price * article.quantity,
              thumbnail: article.thumbnail,
              title: article.title,
            },
          ],
      amount: order
        ? order.amount + article.price * article.quantity
        : article.price * article.quantity,
    });
  };

  const removeArticle = (article) => {
    setOrder({
      ...order,
      items: order.items.filter((item) => item.item !== article.item),
      amount: order.amount - article.price * article.quantity,
    });
  };

  const getItems = (query = "") => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setItems(
        querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          )
      );
    });
  };

  const getItemsByCategory = (category) => {
    const db = getFirestore();
    const itemCollection = db
      .collection("items")
      .where("category", "==", category);
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const getItem = (id) => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item.get().then((doc) => {
      if (!doc.exists) {
        console.log("No results.");
      }
      setItem({ id: doc.id, ...doc.data() });
    });
  };

  const getCategories = () => {
    const db = getFirestore();
    const itemCollection = db.collection("categorias");
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log("No results.");
      }
      setCategories(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  };

  const generateOrder = (orderToGenerate) => {
    const db = getFirestore();
    const orders = db.collection("ordenes");

    const newOrder = {
      amount: order.amount,
      buyer: {
        name: orderToGenerate.name,
        email: orderToGenerate.email,
        address: orderToGenerate.name,
        state: orderToGenerate.state,
        city: orderToGenerate.city,
        zipCode: orderToGenerate.zipCode,
      },
      currency: "ARS",
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      items: order.items,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        setOrder({
          ...newOrder,
          id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pushArticleToCart = (article) => {
    var itemsUpdated = order.items.push({
      ...article,
      quantity: 1,
    });

    setOrder({
      ...order,
      items: itemsUpdated,
    });
  };

  const addItemToArticle = (article) => {
    setOrder({
      ...order,
      items: order.items.map((item) => {
        if (item.item === article.id) {
          item.quantity += 1;
          item.subtotal += article.price;
        }
        return item;
      }),
      amount: order.amount + article.price,
    });
  };

  const removeItemFromArticle = (article) => {
    setOrder({
      ...order,
      items: order.items.map((item) => {
        if (item.item === article.id) {
          item.quantity -= 1;
          item.subtotal -= article.price;
        }
        return item;
      }),
      amount: order.amount - article.price,
    });
  };

  const emptyCart = () => setOrder(null)

  return (
    <CartContext.Provider
      value={{
        articles,
        articlesLength: articles.length,
        items,
        item,
        categories,
        order,
        getItems,
        getItem,
        addArticle,
        removeArticle,
        getCategories,
        getItemsByCategory,
        generateOrder,
        pushArticleToCart,
        addItemToArticle,
        removeItemFromArticle,
        emptyCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
