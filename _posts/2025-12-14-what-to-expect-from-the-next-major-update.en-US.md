---
layout: post

release_date: 2025-12-14
name: What to Expect from the Next Major Update?
permalink: /blog/what-to-expect-from-the-next-major-update/
---

# What to Expect from the Next Major Update?

## **1. Introduction**

Hello, my name is Starciad, and I am the lead developer behind **Stardust Sandbox**. Through this post, I would like to clarify and share some of what has been planned for the next major update of the project and, as a bonus, talk a bit about the current development progress and other related aspects. So, make yourself comfortable, because our journey is only just beginning!

## **2. Acknowledgements**

First of all, I would like to sincerely thank everyone for the tremendous support the game has received recently, from its official release (version 1.0.0.0) to the most recent updates (version 1.2.2.0). It is incredibly rewarding to work on a game that, somewhat unexpectedly, has become one of my most popular projects in recent years.

Stardust Sandbox has reached **800 views**, **80 downloads**, **two 5-star ratings**, and has been added to **11 collections**. This represents a major personal achievement and an important milestone in the project’s history. It is also very gratifying to see the game appearing among the top results when searching for the *“falling-sand”* tag on itch.io. Thank you all for helping make this dream a reality! 🥳

All this support feels surreal, and considering everything, I could not help but continue working to deliver an even richer experience, with new features, elements, and several improvements. Among all the projects I have developed, I never had concrete expectations for Stardust Sandbox. To me, it was just another idea being brought into the world — but life certainly has its surprises.

As some of you may have noticed, the project was relatively inactive throughout this year. This happened for a good reason: I was finally able to enroll in college, majoring in Computer Science, which required me to divide my time among other responsibilities. Now that the semester has ended, I can return to working on the game full-time, something I have been doing since early December.

There are still many things left to be done, and this post serves as a teaser for what is coming, as well as a way to break the silence and make it clear that the project has not been abandoned. That said, enough digressions — let’s take a concrete look at what is being added to the game.

## **3. What’s New**

The goal here is not to present a complete changelog of everything that is coming, but rather to highlight the main points of the next update. After all, what would a falling sand sandbox be without the addition of new elements?

### **3.1. Elements**

In the next update, more than **20 new element** types will be added for use in all kinds of creative constructions. Below are some of the most interesting ones that are already up and running:

#### **3.1.1. Pushers**

These elements push nearby neighbors in the directions indicated by their arrows.

![Demonstration of the pushing elements](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/main/gifs/elements/pushers.gif)

#### **3.1.2. Anti-corruption**

One way to reverse the damage caused by corruption.

![Demonstration of the anti-corruption element](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/anti-corruption.gif)

#### **3.1.3. Devourer**

It devours everything within its reach. It explodes if it finds nothing more.

![Animated GIF demonstrating the devouring element](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/devourer.gif)

#### **3.1.4. Wool**

How about decorating your map with these beautiful wool colors?

![Demonstration of the elements of wool](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/wool.gif)

#### **3.1.5. Lightning**

Warning...! Risk of lightning...

![Demonstration of the lightning element](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/lightning.gif)

#### **3.1.6. Moss**

Moss is unstoppable... It spreads across various surfaces, including water!

![Demonstration of the moss element](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/moss.gif)

#### **3.1.7. Clouds**

It seems we now have the complete water cycle here.

![Demonstration of the elements clouds and storm clouds](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/clouds.gif)

And another thing: if the clouds are below 0ºC, snow will start falling from the sky!

![Demonstration of cold clouds](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/elements/cold_clouds.gif)

And there's also the possibility of lightning strikes!

#### **3.1.8. Conclusion**

Keep in mind that this is just a small preview of what’s coming. Many other elements will also be available for experimentation and fun.

### **3.2. Interfaces**

Another major change was the **complete rewrite of the interface system**. I hope this section does not sound overly technical, but it is important to explain how the system worked previously.

Before, interfaces were built using a single canvas that covered the entire game resolution (1280×720). Within this canvas, elements were manually positioned using raw coordinates. Whenever some level of dynamism was required, manual references to the position of other elements had to be used. In the end, the interface worked, but it was extremely rigid.

The main issue with this approach was precisely its excessive simplicity. Since everything was manual, any animation or repositioning required a significant amount of code. The elements had no hierarchy — no parents or children — only a one-dimensional list. This made both rendering and updating more difficult. The pause menu, for instance, was particularly painful to implement, requiring a small workaround so that a single element could store others and manage rendering processes, making pagination possible at all.

In short, the system was functional — which is why it remained in use until the latest released version — but it was highly inefficient for more complex interfaces and not friendly at all when it came to creating animations. Based on these issues, I decided to invest a considerable amount of time in rewriting the system from scratch.

Now, not only is it easy to create animations, but interfaces can also be built in a much more intuitive way directly through code. Elements now have parent–child relationships, forming a hierarchy. In practice, this means that when a child element is assigned to a parent, its position is automatically calculated based on that parent. Additionally, any change applied to the parent — such as size or position — is propagated to all of its children.

As a result, each interface in the game now follows a tree structure, instead of a simple one-dimensional list. Graphically, the difference between these approaches can be represented as follows:

![Comparison between the GUI structures of the project](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/concepts/gui_structure.gif)

And to go beyond theory, below is a direct comparison between the old HUD and the new one:

> **Old HUD**

![Demonstration of the old HUD interface](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/interfaces/old_hud.gif)


> **New HUD**

![Demonstration of the new HUD interface](https://raw.githubusercontent.com/Starciad/StardustSandbox.Resources/refs/heads/main/gifs/interfaces/new_hud.gif)


In addition to small animations on each slot when hovering the mouse, you can also notice smooth transitions when opening or closing toolbars in the HUD. A significant improvement, wouldn’t you agree?

### **3.3. Other Changes**

In addition to what was mentioned above, several other substantial changes have already been implemented in the project. These will be covered in much more detail in the official changelog of the next update. 🙂

## **4. Final Notes**

That’s quite a lot, I know. There is still a long road ahead, but the release of this update is planned for **December**. In case of delays or unforeseen issues, the release will likely happen early next year, probably in **January**.

It is incredibly rewarding to continue this journey and see everything that is being built along the way. Knowing that the game has managed to bring smiles or positive feelings to someone, even if only briefly, is already deeply fulfilling for me.

If you are interested, feel free to follow the project’s progress on GitHub. The entire source code is available there, and even if you are not a developer, you can still keep track of what is being worked on through the issues and projects sections.

I hope this post provided a good reading experience and made it clear that the project is neither stalled nor canceled. Exciting updates are on the way — a bit of patience is all that’s needed. Thank you very much for reading, and see you in the next post! ❤

## **5. Links**

Game Page (Itch.io):
<https://starciad.itch.io/stardust-sandbox>

Project Repository (GitHub):
<https://github.com/Starciad/StardustSandbox>

Issues (GitHub):
<https://github.com/Starciad/StardustSandbox/issues>

Planning (GitHub):
<https://github.com/users/Starciad/projects/4>

Youtube (Playlist):
<https://youtube.com/playlist?list=PLHHVmd3-Rncva5Yalytwh7DsrQTgvXodm&si=2AlLNVMFGjm53M6g>

![The word "thank you" was constructed from elements of Stardust Sandbox](https://img.itch.zone/aW1nLzI0NTUzMTYwLnBuZw==/original/GRjMyh.png)