import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Contacts, { Contact } from 'react-native-contacts'
import { Button, TextInput } from 'react-native-paper';


const AddContact = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumbers, setPhoneNumbers] = useState('');


    const add = () => {
        let contact : Contact ={
            recordID: '6b2237ee0df85980',
            backTitle: '',
            company: '',
            emailAddresses: [{
              label: 'work',
              email: 'carl-jung@example.com',
            }],
            familyName: lastName,
            givenName: firstName,
            middleName: '',
            jobTitle: '',
            phoneNumbers: [{
              label: 'mobile',
              number: phoneNumbers,
            }],
            hasThumbnail: true,
            thumbnailPath: 'content://com.android.contacts/display_photo/3',
          postalAddresses: [{
              label: 'home',
              formattedAddress: '',
              street: '123 Fake Street',
              pobox: '',
              neighborhood: '',
              city: 'Sample City',
              region: 'CA',
              state: 'CA',
              postCode: '90210',
              country: 'USA',
            }],
            prefix: 'MR',
            suffix: '',
            department: '',
            birthday: {'year': 1988, 'month': 1, 'day': 1 },
            imAddresses: [
              { username: '0123456789', service: 'ICQ'},
              { username: 'johndoe123', service: 'Facebook'}
            ],
            isStarred: false,
            displayName: firstName + " " + lastName,
            note: '',
          }

        Contacts.addContact(contact)
    }

    return (
        <View>
            <View>
                <Text>First Name</Text>
                <TextInput onChangeText={setFirstName} />
            </View>
            <View>
                <Text>Last Name</Text>
                <TextInput onChangeText={setLastName} />
            </View>
            <View>
                <Text>Phone Number</Text>
                <TextInput onChangeText={setPhoneNumbers} />
            </View>
            <View>
                <Button onPress={add}>Add</Button>
            </View>
        </View>
    )
}

export default AddContact