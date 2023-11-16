import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const inserirReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useInserirMensagem = (docCollection) => {
  const [resposta, dispatch] = useReducer(inserirReducer, initialState);
  const [cancelar, setCancelar] = useState(false);

  const checkCancelEvitarLeak = (action) => {
    if (!cancelar) {
      dispatch(action);
    }
  };

  const inserirDocumento = async (documento) => {
    checkCancelEvitarLeak({
      type: "LOADING",
    });

    try {
      const novoDocumento = { ...documento, createdAt: Timestamp.now() };

      const insertedDocumento = await addDoc(
        collection(db, docCollection),
        novoDocumento
      );

      checkCancelEvitarLeak({
        type: "INSERTED_DOC",
      });
    } catch (error) {
      checkCancelEvitarLeak({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelar(true);
  }, []);

  return { inserirDocumento, resposta };
};