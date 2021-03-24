/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Container, Content, List, ListItem} from 'native-base';

const ListPoint = () =>  {
    return (
      <Container>
        <Content>
          <List>
            <TouchableOpacity>
              <ListItem>
                <Text>Top Up Saldo Karcis Point</Text>
              </ListItem>
            </TouchableOpacity>
            <TouchableOpacity>
              <ListItem>
                <Text>Top Up History</Text>
              </ListItem>
            </TouchableOpacity>
          </List>
        </Content>
      </Container>
    );
  };

export default ListPoint;
