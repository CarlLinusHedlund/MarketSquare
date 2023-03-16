import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../store/modules/Products";

export default function SingleProduct() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);
  console.log(id);
  return <div>Hello i'm single product view {id}</div>;
}
