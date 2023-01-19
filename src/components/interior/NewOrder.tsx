import React from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useParams } from 'react-router-native';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

import { ITEMS } from '../../util/data/items';

import { Order } from '../../util/types/order';

interface NewOrdeProps {
  closeModal: () => void;
  addOrder: (id: string, order: Order) => void;
}

const NewOrder: React.FC<NewOrdeProps> = (props) => {
  const { id } = useParams<string>();

  const [orderItem, setOrderItem] = React.useState<string>('');

  const addOrderHandler = (): void => {
    if (orderItem === '') {
      return;
    }
    const order: Order = {
      id: uuid(),
      ...ITEMS.find((item) => item.item === orderItem)!
    };
    props.addOrder(id!, order);
    setOrderItem('');
    props.closeModal();
  };

  return (
    <View style={styles.buttons}>
      <RadioButton.Group
        value={orderItem}
        onValueChange={(value) => setOrderItem(value)}
      >
        <FlatList
          data={ITEMS}
          renderItem={({ item }) => (
            <RadioButton.Item label={item.item} value={item.item} />
          )}
          keyExtractor={(item) => item.item}
        />
        <Button color="#ffc0cb" title="Add order" onPress={addOrderHandler} />
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    margin: 40,
    marginTop: '40%',
    backgroundColor: 'white'
  }
});

export default NewOrder;
