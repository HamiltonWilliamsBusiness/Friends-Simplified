# Friends-Simplified
Creating a MERN stack application that allows a user to sign up, login and create friends within a friendlist and store important data about their friends.

# Took inspiration from tutorials
- https://www.youtube.com/watch?v=98BzS5Oz5E4&list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE
- https://www.youtube.com/watch?v=WsRBmwNkv3Q&t=28s

# Personal Notes

# Bcrypt ... npm install (Notes from utube video)
- Bcrypt is a hashing function that can has passwords in a secure way, if the database was compromised
all the passwords of all the users would still be protected. Hackers could still hack the passwords from 
hashes through brute force attacks or other means. But it still provides high level protection and could give 
me time to let users know about the data breach, so that they can change their passworods if they need to.
- Bcrypt uses salt, salt is a random string of characters that gets added to the user's password before it gets 
hashed. It just adds an extra layer of security to passwords. Ex. if two users have the same password, the added
salt makes the hashes for identical password different. It prevents hackers by password matching because the hashes
make the passwords different. 
- The way this process occurs is by generating a salt, then hashing that together with the password, then
the resulting hash is stored within the database. 

# Definition of a password hash from chatGPT
A password hash is a cryptographic function applied to a password to transform it into a fixed-size string of characters, which is typically a hash value. Hash functions are designed to be one-way functions, meaning it should be computationally infeasible to reverse the process and obtain the original password from its hash.

The primary purpose of password hashing is to enhance security by protecting user passwords in case of a data breach. Storing passwords in plain text is a significant security risk, as it exposes user credentials if unauthorized access to the database occurs. Hashing adds a layer of protection by transforming passwords into irreversible hashes.

Here's a basic overview of how password hashing works:

1. **User Registration:**
   - When a user creates an account or updates their password, the password is passed through a hash function.

2. **Hashing Algorithm:**
   - The hash function, often using algorithms like SHA-256 or bcrypt, processes the password and produces a fixed-length hash value.

3. **Storage:**
   - The hash value, not the actual password, is stored in the database. Even if the database is compromised, attackers won't immediately have access to the user's plaintext password.

4. **Verification:**
   - When a user attempts to log in, the entered password is hashed using the same algorithm, and the resulting hash is compared with the stored hash in the database.

5. **Authentication:**
   - If the hashes match, the password is considered valid, and the user is granted access. If not, access is denied.

Commonly used hashing algorithms include SHA-256, SHA-3, bcrypt, and Argon2. It's important to use a strong, slow, and adaptive hashing algorithm to resist various types of attacks, including brute-force and dictionary attacks.

Additionally, it's recommended to incorporate additional security measures such as salting. A salt is a random value unique to each user that is combined with the password before hashing. Salting helps prevent attackers from using precomputed tables (rainbow tables) to crack passwords efficiently.