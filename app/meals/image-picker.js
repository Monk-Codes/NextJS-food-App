"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
export default function ImagePicker({ label, name }) {
 const [pickedImg, setPickedImg] = useState();
 const imageInput = useRef();

 function handlePick() {
  imageInput.current.click();
 }

 function handleImageChange(e) {
  const file = e.target.files[0];
  if (!file) {
   setPickedImg(null);
   return;
  }
  const fileReader = new FileReader();
  fileReader.onload = () => {
   setPickedImg(fileReader.result);
  };
  fileReader.readAsDataURL(file);
 }
 return (
  <div className={classes.picker}>
   <label htmlFor={name}>{label}</label>
   <div className={classes.controls}>
    <div className={classes.preview}>
     {!pickedImg && <p>No Image Picked</p>}
     {pickedImg && <Image src={pickedImg} alt="image" fill />}
    </div>
    <input className={classes.input} ref={imageInput} onChange={handleImageChange} type="file" id={name} accept="image/png, image/jpg image/jpeg" name={name} required />
    <button className={classes.button} type="button" onClick={handlePick}>
     Pick an Image
    </button>
   </div>
  </div>
 );
}
