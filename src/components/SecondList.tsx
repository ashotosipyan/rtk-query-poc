import {Text, View} from 'react-native';
import {api, useGetTodosQuery} from '../services/api.ts';
import {useDispatch, useSelector} from 'react-redux';

const SecondList = () => {
  // const {data, error, isLoading} = useGetTodosQuery();
  // const dispatch = useDispatch();
  const selectorData = useSelector(api.endpoints?.getTodos.select());
  // const selectorData = dispatch(api.endpoints?.getTodos.initiate());

  console.log({selectorData});

  // if (isLoading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{paddingHorizontal: 20}}>
      {selectorData.data?.results.map(todo => (
        <Text
          key={todo.id}
          style={{
            marginBottom: 15,
            textTransform: 'capitalize',
            fontSize: 15,
            fontWeight: '700',
          }}>
          {todo.name}
        </Text>
      ))}
    </View>
  );
};

export default SecondList;
