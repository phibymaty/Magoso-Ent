import Nav from "../components/Nav";
import Footer from "./Footer";
import styled from "styled-components";
import {
  Label,
  PermDataSettingTwoTone,
  SettingsRemote,
} from "@mui/icons-material";
import { useState } from "react";
const ProductInput = styled.input`
  text-align: center;
  padding: 1em;
  border-radius: 5px solid black;
  font-size: 1em;
  margin-top: 1em;
`;
const ProductLabel = styled.label``;
const AddProductText = styled.input`
  text-align: center;
  padding: 1em;
  font-size: 1em;
`;

const AddProductArea = styled.textarea`
  text-align: center;
  border-radius: 5px;
  font-size: 1em;

  padding: 1em;
`;

const ButtonButton = styled.button`
  text-align: center;
  padding: 1em;
  font-size: 1em;
  margin-bottom: 1.5em;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  gap: 2em;
`;

const AddProductContainer = styled.div``;
const SelectOption = styled.option``;
const SelectDropDown = styled.select`
  padding: 1em;
`;
const AddProductImage = styled.img`
  width: 50%;
`;

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productDetailedDescription: "",
    productPrice: 0,
    productSalePrice: "",
    onOffer: "Not on offer",
    productCategory: "",
    productImage: "",
    galleryImages: [],
  });
  const [galleryPreview, setGalleryPrewiew] = useState([]);

  const [img, setImg] = useState(" ");

  const images = (e, type) => {
    // const file = e.target.files[0];
    // const fileReader = new FileReader();
    // fileReader.readAsDataURL(file);

    const files = e.target.files;
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        if (type == "single") {
          setFormData((prev) => ({ ...prev, productImage: fileReader.result }));
          setImg(fileReader.result);
        } else {
          setFormData((prev) => ({
            ...prev,
            galleryImages: [...prev.galleryImages, fileReader.result],
          }));
          setGalleryPrewiew((prev) => [...prev, fileReader.result]);
        }
      };
    });
  };

  // fileReader.onload = () => {
  //   console.log(fileReader.result);
  //   setImg(fileReader.result);
  // };
  // fileReader.onerror = (error) => {
  //   console.log(error);

  // };

  return (
    <AddProductContainer>
      <Nav />

      <Container>
        <ProductInput
          type="text"
          placeholder="Product Name"
          onChange={(e) =>
            setFormData({ ...formData, productName: e.target.value })
          }
        />
        <AddProductImage placeholder="image"></AddProductImage>
        <AddProductArea
          placeholder="Product Description"
          onChange={(e) =>
            setFormData({ ...formData, productDescription: e.target.value })
          }
        ></AddProductArea>
        <AddProductArea
          placeholder="Product Detailed Description"
          onChange={(e) =>
            setFormData({
              ...formData,
              productDetailedDescription: e.target.value,
            })
          }
        ></AddProductArea>
        <ProductInput
          type="text"
          placeholder="Product Price"
          onChange={(e) =>
            setFormData({ ...formData, productPrice: parseInt(e.target.value) })
          }
        ></ProductInput>
        <ProductInput
          type="text"
          placeholder="Product sale Price"
          onChange={(e) =>
            setFormData({ ...formData, productSale: parseInt(e.target.value) })
          }
        ></ProductInput>
        <SelectDropDown
          onChange={(e) =>
            setFormData({ ...formData, productSale: e.target.value })
          }
        >
          <SelectOption>On offer</SelectOption>
          <SelectOption selected>Not on offer</SelectOption>
        </SelectDropDown>

        <SelectDropDown
          onChange={(e) =>
            setFormData({ ...formData, productCategory: e.target.value })
          }
        >
          <SelectOption selected disabled>
            Select product category
          </SelectOption>
          <SelectOption>Attire</SelectOption>
          <SelectOption>Beadery</SelectOption>
          <SelectOption>Sculpture</SelectOption>
          <SelectOption>Weaver</SelectOption>
          <SelectOption> Pottery</SelectOption>
          <SelectOption>Decoration</SelectOption>
        </SelectDropDown>

        <ProductLabel> product image</ProductLabel>
        <ProductInput type="file" onChange={(e) => images(e, "single")} />
        <AddProductImage src={img} />

        <ProductLabel>gallery image</ProductLabel>
        <ProductInput
          type="file"
          multiple
          onChange={(e) => images(e, "multiples")}
        />
        <div style={{ display: "flex", gap: "2em" }}></div>
        {galleryPreview.map((item) => {
          return <AddProductImage src={item} />;
        })}

        <ButtonButton type="button" onClick={() => console.log(formData)}>
          Submit
        </ButtonButton>
      </Container>

      <Footer />
    </AddProductContainer>
  );
};

export default AddProduct;
