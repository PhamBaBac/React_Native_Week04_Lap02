import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

const images = {
  icon: require("../../assets/images/book.jpg"),
};

const CartScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(100000);
  const [discountCode, setDiscountCode] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(productPrice);
  const [originalPrice, setOriginalPrice] = useState(190000); // Giá gốc

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setProductPrice(productPrice - 100000);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    setProductPrice(productPrice + 100000);
  };

  const applyDiscountCode = () => {
    if (discountCode === "MGG10") {
      const newDiscountedPrice = productPrice * 0.9;
      setDiscountedPrice(newDiscountedPrice);
    } else {
      alert("Mã giảm giá không hợp lệ");
    }
  };

  // Tính giá tạm tính và thành tiền dựa trên giá giảm giá và số lượng
  const calculateTotal = () => {
    const subtotal = discountedPrice * quantity;
    return subtotal;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{
              width: "100%",
              height: 200,
              borderWidth: 1,
              borderColor: "#000",
            }}
            source={images.icon}
          />
          <Text style={{ fontWeight: "bold" }}>Mã giảm giá đã lưu</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={styles.title}>Cung cấp bởi Tiki Trading</Text>
          <Text style={styles.price}>{productPrice}đ</Text>
          <Text style={styles.oldPrice}>{originalPrice}đ</Text>
          <View style={styles.btnGroup}>
            <View style={styles.btnTGSL}>
              <Pressable style={styles.button} onPress={decreaseQuantity}>
                <Text style={styles.buttonText}>-</Text>
              </Pressable>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                }}
              >
                {quantity}
              </Text>
              <Pressable style={styles.button} onPress={increaseQuantity}>
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
            </View>
            <Pressable>
              <Text
                style={{
                  color: "#0A5EB7",
                  fontWeight: "bold",
                }}
              >
                Mua sau
              </Text>
            </Pressable>
          </View>
          <Text style={{ fontWeight: "bold", marginTop: 20, color: "#0A5EB7" }}>
            Xem tại đây
          </Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.leftBody}>
          <TextInput
            style={styles.btnMGG}
            placeholder="  Mã giảm giá"
            value={discountCode}
            onChangeText={(text) => setDiscountCode(text)}
          ></TextInput>
          <Text style={{ fontWeight: "bold" }}>
            Bạn có phiếu quà tặng Tiki?
          </Text>
          <Text style={{ fontWeight: "bold" }}>Tạm tính</Text>
          <Text style={{ fontWeight: "bold" }}>Thành tiền</Text>
        </View>
        <View style={styles.rightBody}>
          <Pressable style={styles.btnApDung} onPress={applyDiscountCode}>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
              }}
            >
              Áp Dụng
            </Text>
          </Pressable>
          <Pressable>
            <Text style={{ color: "#0A5EB7", fontWeight: "bold" }}>
              Nhập tại đây?
            </Text>
          </Pressable>
          <Text style={{ fontWeight: "bold", color: "red" }}>
            {calculateTotal()}đ
          </Text>
          <Text style={{ fontWeight: "bold", color: "red" }}>
            {calculateTotal()}đ
          </Text>
        </View>
      </View>
      <Pressable
        style={{
          height: 50,
          backgroundColor: "red",
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          margin: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
          }}
        >
          TIẾN HÀNH ĐẶT HÀNG
        </Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 2,
    height: 240,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 10,
  },
  rightContainer: {
    flex: 3,
    flexDirection: "column",
    height: 240,
    margin: 10,
  },
  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
  btnGroup: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  price: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
  oldPrice: {
    fontSize: 16,
    color: "gray",
    textDecorationLine: "line-through",
  },
  btnTGSL: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    height: 20,
    width: 20,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "#00000",
  },
  bodyContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
  },
  leftBody: {
    flex: 3,
    height: 300,
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 10,
  },
  rightBody: {
    flex: 2,
    height: 300,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    margin: 10,
  },
  btnMGG: {
    height: 50,
    width: "80%",
    fontSize: 20,
    color: "#00000",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
  },
  btnApDung: {
    height: 50,
    width: "100%",
    backgroundColor: "#0A5EB7",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartScreen;
