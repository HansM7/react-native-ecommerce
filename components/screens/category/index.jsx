import { StyleSheet, View } from "react-native";
import CategorySearch from "./search";
import { useState } from "react";
import CatergoryList from "./list";
import FooterComponent from "../../elements/footer";

function Category({ setPage, page }) {
  const initialDataCategory = [
    {
      id: 1,
      title: "Shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp3nqDGy3wgij0eEf0JjQiFL-3RqQ7jWSVsOvRFcEcQ&s",
    },
    {
      id: 2,
      title: "Shirt",
      image:
        "https://media.istockphoto.com/id/488160041/photo/mens-shirt.jpg?s=612x612&w=0&k=20&c=xVZjKAUJecIpYc_fKRz_EB8HuRmXCOOPOtZ-ST6eFvQ=",
    },
    {
      id: 3,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 4,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 5,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 6,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 7,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 8,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 9,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 10,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 11,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
    {
      id: 12,
      title: "T-shirt",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KgWNKJkZ89zoASB3tOKbkL6EdQNKXYQIut03775VTw&s",
    },
  ];

  const [dataCategory, setdataCategory] = useState(initialDataCategory);
  const [dataTemporal, setDataTemporal] = useState(dataCategory);

  function handleSearch(word) {
    if (word === "") {
      setDataTemporal(dataCategory);
    } else {
      const categories = dataCategory.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setDataTemporal(categories);
    }
  }
  return (
    <View style={styles.container_abs}>
      <View style={styles.container_category}>
        <CategorySearch handleSearch={handleSearch}></CategorySearch>
        <CatergoryList
          dataCategory={dataTemporal}
          setPage={setPage}
        ></CatergoryList>
      </View>
      <FooterComponent setPage={setPage} page={page}></FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container_abs: {
    width: "100%",
  },
  container_category: {
    position: "relative",
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 50,
    flexDirection: "column",
  },
});

export default Category;
