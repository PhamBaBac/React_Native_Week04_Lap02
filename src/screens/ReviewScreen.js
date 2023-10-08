import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

const images = {
  icon: require("../../assets/images/usb.jpg"),
};

// Định nghĩa sản phẩm
const product = {
  image: "icon",
  title:
    "USB Kingston nổi bật về tốc độ nhanh, tính năng cao, bảo mật an toàn cho hiệu suất vượt trội.",
  reviews: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      text: "Sản phẩm tốt, nhận được hàng nhanh chóng",
      rating: 3,
      image: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      text: "Sản phẩm tốt, nhận được hàng nhanh chóng",
      rating: 5,
      image: "https://picsum.photos/200/300",
    },
  ],
};

// Định nghĩa màn hình ReviewScreen
const ReviewScreen = () => {
  const [reviewText, setReviewText] = useState(""); // Khởi tạo dữ liệu đánh giá
  const [reviewImage, setReviewImage] = useState(null); // Khởi tạo dữ liệu hình ảnh đánh giá
  const [selectedRating, setSelectedRating] = useState(0); // Khởi tạo dữ liệu rating
  const [reviews, setReviews] = useState(product.reviews); // Khởi tạo dữ liệu reviews

  // Hàm thêm hình ảnh
  const handleAddPhoto = () => {
    setReviewImage("https://picsum.photos/200/300");
  };

  // Hàm gửi đánh giá
  const handleSubmit = () => {
    if (selectedRating === 0) {
      // Nếu chưa chọn rating thì hiển thị thông báo
      alert("Vui lòng chọn rating trước khi gửi đánh giá.");
      return;
    }

    // Tạo đối tượng đánh giá mới
    const newReview = {
      id: reviews.length + 1,
      name: "Your Name",
      text: reviewText,
      image: reviewImage,
      rating: selectedRating,
    };

    // Thêm đánh giá mới vào mảng reviews
    setReviews([...reviews, newReview]);
    setReviewText(""); // Xóa dữ liệu đánh giá
    setReviewImage(null); // Xóa dữ liệu hình ảnh đánh giá
    setSelectedRating(0); // Xóa dữ liệu rating
  };

  // Hàm xử lý rating
  const handleRating = (index) => {
    setSelectedRating(index);
  };

  // Hàm hiển thị đánh giá
  const renderReviewItem = ({ item }) => {
    const starIcons = "★".repeat(item.rating); // Tạo chuỗi ngôi sao dựa trên rating
    return (
      <View style={styles.reviewItem}>
        <Text style={styles.reviewName}>{item.name}</Text>
        <Text style={styles.reviewText}>{item.text}</Text>
        <Text style={styles.reviewRating}>{starIcons}</Text>
        {item.image && ( // Nếu có item.image thì mới hiển thị
          <Image style={styles.reviewImage} source={{ uri: item.image }} />
        )}
      </View>
    );
  };
  // Hiển thị màn hình ReviewScreen
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={images[product.image]}
        />
        <Text style={styles.title}>{product.title}</Text>
      </View>

      <Text style={styles.ratingMessage}>
        {selectedRating === 0
          ? "Chưa đánh giá"
          : selectedRating === 1
          ? "Sản phẩm không tốt"
          : selectedRating === 2
          ? "Sản phẩm tạm được"
          : selectedRating === 3
          ? "Sản phẩm khá tốt"
          : selectedRating === 4
          ? "Sản phẩm tốt"
          : "Sản phẩm rất tốt"}
      </Text>
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, i) => (
          <Text key={i} style={styles.star} onPress={() => handleRating(i + 1)}>
            {i < selectedRating ? "★" : "☆"}
          </Text>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <Button title="Thêm hình" onPress={handleAddPhoto} />
        {reviewImage && ( // Nếu có reviewImage thì mới hiển thị
          <Image style={styles.inputImage} source={{ uri: reviewImage }} /> // Hiển thị reviewImage
        )}
        <TextInput
          style={styles.input}
          placeholder="Viết đánh giá của bạn"
          value={reviewText}
          onChangeText={setReviewText} // Lấy dữ liệu từ TextInput
        />
        <Button title="Gửi" onPress={handleSubmit} />
      </View>

      <FlatList // Hiển thị danh sách đánh giá
        data={reviews}
        renderItem={renderReviewItem} // Gọi hàm renderReviewItem
        keyExtractor={(item) => item.id.toString()} // Lấy id của mỗi phần tử
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10, // Khoảng cách giữa các phần tử theo chiều dọc
  },
  ratingMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  star: {
    fontSize: 60,
    color: "#f1c40f",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  inputImage: { width: 100, height: 100, marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  reviewItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  reviewName: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  reviewText: { fontSize: 14, marginBottom: 10 },
  reviewRating: { fontSize: 20, color: "#f1c40f", marginBottom: 10 },
  reviewImage: { width: 100, height: 100, marginBottom: 10 },
});

export default ReviewScreen;
