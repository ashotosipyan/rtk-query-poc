import {Pressable, Text, View} from 'react-native';
import {api, useGetTodosQuery} from '../services/api.ts';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

const List = () => {
  const {data, error, isLoading, refetch} = useGetTodosQuery();

  // const selectorData = useSelector(api.endpoints?.getTodos.select());
  //
  console.log({data});

  const dispatch = useDispatch();

  // const customFetch = () => {
  //   dispatch(api.endpoints?.getTodos.initiate());
  // };

  // const [trigger, { data, error }] = useLazyQuery();

  // const { abort, data, error } = useQuery();

  const navigation = useNavigation();
  // useEffect(() => {
  //   refetch();
  // }, []);
  // if (isLoading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error: {error.message}</Text>;

  return (
    <>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={{backgroundColor: 'yellow', padding: 15, marginBottom: 20}}>
        <Text>Next page</Text>
      </Pressable>
      <Pressable
        onPress={() => refetch()}
        style={{backgroundColor: 'blue', padding: 15, marginBottom: 20}}>
        <Text>Refresh</Text>
      </Pressable>

      <View style={{paddingHorizontal: 20}}>
        {data &&
          data?.results?.map(todo => (
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
    </>
  );
};

export default List;
