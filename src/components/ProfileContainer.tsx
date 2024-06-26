import AvatarField from '@ui/AvatarField';
import colors from '@utils/colors';
import React = require('react');
import {StyleSheet, Text, View} from 'react-native';
import {UserProfile} from 'src/store/auth';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {Pressable} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProfileNavigatorStackParamList} from 'src/@types/navigation';

interface Props {
  profile?: UserProfile | null;
}

const ProfileContainer: React.FC<Props> = ({profile}) => {
  const {navigate} =
    useNavigation<NavigationProp<ProfileNavigatorStackParamList>>();
  if (!profile) return null;
  return (
    <View style={styles.container}>
      <AvatarField source={profile.avatar} />
      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileName}>{profile.name}</Text>
        <View style={styles.flexRow}>
          <Text style={styles.profileEmail}>{profile.email}</Text>
          {profile.verified ? (
            <MaterialIcon name="verified" size={15} color={colors.SECONDARY} />
          ) : (
            <Octicons name="unverified" size={15} color={colors.SECONDARY} />
          )}
        </View>
        <View style={styles.flexRow}>
          <Text style={styles.profileActionLink}>
            {profile.followers} Followers
          </Text>
          <Text style={styles.profileActionLink}>
            {profile.followings} Followings
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => navigate('ProfileSettings')}
        style={styles.settingsBtn}>
        <AntDesign name="setting" size={22} color={colors.CONTRAST} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfoContainer: {
    paddingLeft: 10,
  },
  profileName: {
    color: colors.CONTRAST,
    fontSize: 18,
    fontWeight: '700',
  },
  profileEmail: {
    color: colors.CONTRAST,
    marginRight: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileActionLink: {
    backgroundColor: colors.SECONDARY,
    color: colors.PRIMARY,
    paddingHorizontal: 4,
    paddingVertical: 2,
    margin: 5,
    borderRadius: 7,
  },
  settingsBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileContainer;
