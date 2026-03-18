import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useNavigation } from "@react-navigation/native";
  
  export default function Recipe({ categories, foods }) {
    const navigation = useNavigation();
  
    const renderItem = ({ item, index }) => (
      <ArticleCard item={item} index={index} navigation={navigation} />
    );
  
    return (
      <View style={styles.container}>
        <View testID="recipesDisplay">
          <FlatList
            data={foods}
            keyExtractor={(item) => item.idFood}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
  
  const ArticleCard = ({ item, index, navigation }) => {
    return (
      <View
        style={[
          styles.cardContainer,
          { paddingLeft: 20, paddingRight: 15 },
        ]}
        testID="articleDisplay"
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeDetail", { ...item })}
        >
          {/* Imagen */}
          <Image
            source={{ uri: item.recipeImage }}
            style={[
              styles.articleImage,
              { height: index % 3 === 0 ? hp(25) : hp(35) },
            ]}
          />
  
          {/* Nombre */}
          <Text style={styles.articleText}>
            {item.recipeName.length > 20
              ? item.recipeName.slice(0, 20) + "..."
              : item.recipeName}
          </Text>
  
          {/* Descripción */}
          <Text style={styles.articleDescription}>
            {item.recipeInstructions.length > 40
              ? item.recipeInstructions.slice(0, 40) + "..."
              : item.recipeInstructions}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      marginHorizontal: wp(4),
      marginTop: hp(2),
    },
    cardContainer: {
      justifyContent: "center",
      marginBottom: hp(1.5),
      flex: 1,
    },
    articleImage: {
      width: "100%",
      borderRadius: 35,
      backgroundColor: "rgba(0,0,0,0.05)",
    },
    articleText: {
      fontSize: hp(1.5),
      fontWeight: "600",
      color: "#52525B",
      marginLeft: wp(2),
      marginTop: hp(0.5),
    },
    articleDescription: {
      fontSize: hp(1.2),
      color: "#6B7280",
      marginLeft: wp(2),
      marginTop: hp(0.5),
    },
  });