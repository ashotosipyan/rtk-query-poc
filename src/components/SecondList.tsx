import {Image, Text, View} from 'react-native';
import {useGetSinglePokemonQuery} from '../services/singlePokemonApi.ts';
import * as url from 'url';

const SecondList = () => {
  // const {data, error, isLoading} = useGetTodosQuery();
  // const dispatch = useDispatch();
  // const selectorData = useSelector(api.endpoints?.getTodos.select());
  // const selectorData = dispatch(api.endpoints?.getTodos.initiate());

  // console.log({selectorData});
  const {data, error, isLoading} = useGetSinglePokemonQuery();

  if (isLoading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{paddingHorizontal: 20}}>
      <Image
        source={{uri: `${data.sprites.back_default}`}}
        style={{width: 200, height: 200}}
      />
      <Text style={{textAlign: 'center'}}>{data.name}</Text>
    </View>
  );
};

export default SecondList;
