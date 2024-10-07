import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.ionic.aora",
    projectId: "67041e880025d255c6d4",
    databaseId: "67041f860017b2d87c74",
    userCollectionId: "67041f9e001799e90ee2",
    videoCollectionId: "67041fb70029063024ea",
    storageId: "670420a300027342b1b7",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)
;

const account = new Account(client);
const avatars = new Avatars(client);
const db = new Databases(client);

export async function createUser(email: string, password: string, username: string) {
    const randomString = Math.random().toString(36).substring(2, 15);

    // Combine username and random string to create user ID
    const userId = `${username.replace(/[^a-zA-Z0-9.-_]/g, "").toLowerCase()}_${randomString}`
  
    try {
      const newAccount = await account.create(
        userId,
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await db.createDocument(
        config.databaseId,
        config.userCollectionId,
        userId,
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  
  // Sign In
  export async function signIn(email: string, password: string) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
  
      return session;
    } catch (error: any) {
      throw new Error(error);
    }
  }

