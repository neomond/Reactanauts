import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts from 'react-native-contacts'
import { List } from 'react-native-paper'

const ContactList = () => {

    const [contacts, setcontacts] = useState<any[]>([])


    useEffect(() => {

        Contacts.getAll()
            .then(data => {
                setcontacts(data);
            })

    }, [])


    const renderItem = ({item} : any) => {
        return <List.Item
        title={item.givenName + ' ' + item.familyName}
        description={item.phoneNumbers[0].number}
        left={props => <List.Icon {...props} icon="folder" />}
      />
    }

    return (<>
        <FlatList 
            data={contacts}
            renderItem={renderItem}
        />
    </>
    )
}

export default ContactList