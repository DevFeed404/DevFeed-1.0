## DevFeed

<div align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" />
<img src="https://forthebadge.com/images/badges/uses-brains.svg" />
<img src="https://forthebadge.com/images/badges/powered-by-responsibility.svg" />
<br>
<img src="https://img.shields.io/github/repo-size/DevFeed404/DevFeed-1.0?style=for-the-badge" />
<img src="https://img.shields.io/github/issues/DevFeed404/DevFeed-1.0?style=for-the-badge" />
<img src="https://img.shields.io/github/issues-raw/DevFeed404/DevFeed-1.0?style=for-the-badge" />
   
<img src="https://img.shields.io/github/forks/DevFeed404/DevFeed-1.0?style=for-the-badge" />
<img src="https://img.shields.io/github/issues-pr-closed/DevFeed404/DevFeed-1.0?style=for-the-badge" /><br>
   <img src="https://img.shields.io/github/stars/DevFeed404/DevFeed-1.0?style=for-the-badge" />
   <img src="https://img.shields.io/github/contributors/DevFeed404/DevFeed-1.0?style=for-the-badge" />
    <img src="https://img.shields.io/github/issues-pr-closed/DevFeed404/DevFeed-1.0?style=for-the-badge" />
       <img src="https://img.shields.io/github/last-commit/DevFeed404/DevFeed-1.0?style=for-the-badge" />
        
   </div>

## DevFeed: Newsletter Website 💌

**Welcome to DevFeed!** It's a newsletter website that enables users to subscribe and receive newsletters. The application is built with two main components:

**Client-Side Frontend (React.js):** The frontend of DevFeed is developed using React.js, a popular JavaScript library for building user interfaces. With React.js, we ensure a smooth and responsive user experience, making it easy for users to navigate and interact with the website.

**Server-Side Backend (Node.js):** The backend of DevFeed is powered by Node.js, a powerful JavaScript runtime environment. Node.js enables us to handle server-side logic, manage user subscriptions, and send out newsletters efficiently. It provides a robust foundation for building scalable and performant web applications.

By combining the frontend and backend components, DevFeed creates a seamless user experience, allowing users to easily subscribe to newsletters and receive the latest updates right in their inbox.

## ✨ Prerequisites

Before running DevFeed locally, ensure that you have the following software installed on your machine:

**Node.js** 🚀: Make sure you have Node.js installed. You can download it from the official Node.js website: https://nodejs.org

**npm (Node Package Manager) 📦**: npm is usually installed automatically with Node.js. You can verify its installation by running the following command in your terminal or command prompt:

```
npm -v
```

If you see a version number printed out, it means npm is installed. If not, you can install it by following the instructions on the npm website: https://www.npmjs.com/get-npm

Make sure to have these prerequisites in place before proceeding with the setup. Now you're ready to run DevFeed locally and start exploring its awesome features! 💪

## Getting Started🌟📰

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Install dependencies:

   ```shell
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start the development environment:

   ```shell
   npm run start
   ```

   This command will start the backend servers.

```shell
  npm start
```

This command is for Starting the front-end

4. Access DevFeed:

   Open your web browser and navigate to `http://localhost:3000` to access the DevFeed website.

## Folder Structure

The project repository is organized as follows:

- `client`: Contains the client-side frontend code built with React.js.
- `server`: Contains the server-side backend code built with Node.js.

## Addtional Section illustrating some issues a user may experience while running this project and associated preventing measures

1. After forking the repo and cloning the repo to the local device, when we follow the steps given in the readme, i.e.,cd client -> npm install -> cd ../server -> npm install -> npm run start .
   We get an error message saying: **Missing script: “start”** and some others.

The error message indicates that the npm script "start" is missing in the project's package.json file. When we run the command `npm run start`, npm looks for a script named **"start"** in the **"scripts"** section of the package.json file.

To resolve this issue, we can do one of the following:

a] Checking the package.json file: Open the package.json file located in the project's root directory and ensure a **"scripts"** section with a **"start"** script is defined.

b] Using a different script: If we intend to run a separate script instead of **"start"**, we can modify the npm command accordingly. For example, if we have a script named **"dev,"** we can run `npm run dev` instead.

After making the necessary changes, save the `package.json` file and try rerunning the command.

2. After implementing the above-mentioned changes when we try to run the command: `npm run start`, we may get the following message on the console: <br> **Server is running on 5000 <br> error occured while connecting**

The same message may also appear if we try to run the project using the `npm run dev` command.

Here's how we can prevent it:

We can modify the method by which the **index.js** file is listening to the port by implementing the **environment variable PORT** so that the server can automatically find an available port for it and if not then it has the **localhost as 5000**.

To do this, implement the following in `server/index.js` page:

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is running on ${PORT}`);
});

## 🙌 Contributing

Contributing to DevFeed is greatly appreciated! Follow the steps below to contribute:

Fork the repository by clicking on the "Fork" button on the top right of the repository page. This will create a copy of the repository in your GitHub account.
Clone the forked repository to your local machine using the command git clone **https://github.com/your-username/DevFeed.git.**
Create a new branch for your feature or bug fix using the command

```
git checkout -b your-branch-name
```

Make sure to give your branch a descriptive name.Implement your changes in the codebase.

Commit your changes with a descriptive commit message using the command

```
git commit -m "Your commit message"
```

Push your changes to your forked repository using the command

```
git push origin your-branch-name.
```

Go to the original repository on GitHub and open a pull request. Provide a clear and detailed description of your changes.

Wait for the maintainers to review your pull request. They may provide feedback or request further changes.

Once your pull request is approved, your changes will be merged into the main repository.

Thank you for your contribution to making DevFeed better!

## Contributors

<p align="center">
<a href="https://github.com/DevFeed404/DevFeed-1.0/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=DevFeed404/DevFeed-1.0" />
</a></p>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=DevFeed404/DevFeed-1.0&type=Date)](https://star-history.com/#DevFeed404/DevFeed-1.0&Date)

## License

This project is licensed under the [MIT License](LICENSE).

```
Feel free to customize the README.md file further based on the specific details and requirements of your project.
```
