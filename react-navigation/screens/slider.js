import React ,{useEffect, useRef,useState} from "react";
import { StyleSheet,View,FlatList,Text,Image } from "react-native";
import Carousel,{Pagination} from "react-native-snap-carousel";
function Slider({navigation}){
    const [images,setImages]=useState([
        {id:'1',image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'},
        {id:'2',image:'https://img.freepik.com/vecteurs-libre/concept-originaux-vintage_225004-1354.jpg?w=900&t=st=1686150052~exp=1686150652~hmac=a3e7cca96fe8a09df078d1e7804bac38cc3dd6be10ac11c60fc6dd4324a9a8c4'},
        {id:'3',image:'https://img.freepik.com/vecteurs-libre/unique-belle-rose-rouge_225004-1056.jpg?t=st=1686150052~exp=1686150652~hmac=dd20df76d27eb950ef21080921a9141084de5f7ebb0a7511f14a7f78ce6bf798'},
        {id:'4',image:'https://img.freepik.com/vecteurs-libre/ensemble-silhouettes-animaux-dessines-main_23-2149563630.jpg?w=740&t=st=1686150179~exp=1686150779~hmac=79dac1e55ebfa47e4150928a60a0231bc922c57801347260bbb8628da72c3bec'},

    ]);
    const renderItem = ({item})=>{
        return (
            <View style={styles.container}>
                <Image source={{uri: item.image}} style={{width: 300, height: 300}} />
                {/* <Text>{item.id}</Text> */}
            </View>
        )
       
    }
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
          carouselRef.current?.snapToNext();
        }, 5000);
    
        return () => clearInterval(timer);
      }, []);
    return (
        // <View>
        //     <FlatList
        //         data={images}
        //         renderItem={({item})=>(
        //             <View>
        //                 <Text>{item.id}</Text>
        //                 <Image source={{uri: item.image}} style={{width: 200, height: 200}}/>
        //             </View>
        //         )}
        //         horizontal
            
        //     />
        // </View>
        <View style={styles.container}>
            <Carousel
                data={images}
                renderItem={renderItem}
                sliderWidth={300}
                itemWidth={200}
                layout={'stack'}
                autoplay={true}
                autoplayInterval={5000}
                loop={true}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            <Pagination
            dotsLength={images.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            />
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    },
    paginationContainer: {
        paddingVertical: 8,
      },
      dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
      },
      card:{
      backgroundColor: 'yellow',
      fontSize : 20,
      width : 300,
      marginTop :30,
      margin:10,
      padding : 10,
      
  }
  });
export default Slider;