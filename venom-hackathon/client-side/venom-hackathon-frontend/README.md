# HOW TO COMMIT AND COLLABORATE FOR FRONTEND

<li> On your desktop, open your terminal
<li> On your terminal route to your desktop by typing;

```
cd desktop
```

<li> When you are routed to your desktop, you then clone the repo by typing;

```
git clone https://github.com/JustCODEs-Team/venom-hackathon.git
```

<li> When you have cloned, you then route to the folder by typing

```
cd venom-hackathon
```

This would route you to the directory.

<li> To route to the react folder for frontend, you type

```
cd client-side  
```

then

```
cd venom-hackathon-frontend
```

<li> This is where you would find the react folder which has been prepped.

What we would be using is `Vite + React`, `SASS` and maybe (for those who wanna) `Tailwind.css`.

Once in That folder, you would see the `src` folder. Open it. 
In there, you would see three major folders, the `Pages`, the `Component`, the `assets.`

The assets folder would contain all the images which would be used for the course of this code. Any new image added is dropped there.

As you would notice, the `Components` and the `Pages` folder each have subfolders that mean something, and are in this format;

`PAGES`

```
├──Pages
│├──Landing
││├──Landing.jsx
││├──Landing.scss
│├──About
││├──About.jsx
││├──About.scss
```

`COMPONENTS`

```
├──Components
│├──PageButton
││├──PageButton.jsx
││├──PageButton.scss
│├──Navbar
││├──Navbar.jsx
││├──Navbar.scss
```
<li> Please follow the naming process accordingly.

Each `.jsx` file must be in the same folder as its corresponding `.scss` file. This is to enable ease of editing. And in each `.scss` file, you must import the `App.scss` file into it using this method;

```
@import '../../App.scss';
```

Do this in each new `.scss` file you make, so you would be able to use the `variables` already declared in the `App.scss` file.

<b> When you have cloned the repo, you need to create your own branch. You can do so by following this steps in your terminal

```
git branch <branch-name>
```

Let's say the branch I want to create is `chibuzo`, I'd do;

```
git branch chibuzo
```

I have created this branch. Then I move to the branch I have created by doing;

```
git checkout <branch-name>
```

This would lead you to the branch which you have created

Then, you can now run this code to get it started in your browser.

```
npm run dev
```
</b>

You have to do this because this was prompted using `Vite + React`.

<b> REMEMBER TO MAKE PULL REQUEST TO THE `FRONTEND` BRANCH EACH TIME AFTER CODING FOR THE DAY. AND REMEMBER TO PULL CHANGES FROM THE `FRONTEND` BRANCH EACH DEY TO INTEGERATE WITH THE CHANGES THAT HAVE BEEN MADE </b>

### HAPPY CODING!