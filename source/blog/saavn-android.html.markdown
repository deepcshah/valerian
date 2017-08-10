---
title: Saavn for Android
date: 2014-04-12
tags: portfolio
category: portfolio
company: Saavn
thumbnail: /images/thumb-saavnmobile@2x.png
color: green
description: Most of my time at Saavn was spent leading the product design for Saavn’s Android app. Saavn is a service primarily marketed towards South Asians, for whom Android is by far the leading platform of choice. The lack of stable (and fast) Internet connectivity throughout the region made this a great design challenge to take on.
description_image: /images/screenshot-saavn.png
meta: Saavn · June 2013 — October 2014
---

Saavn is India’s largest and most prolific music streaming service.

When I started working at Saavn, there was already an Android app. Unfortunately, it was essentially abandonware. While I was working on other projects, the app’s technical and design debts got worse. The user experience and interface was essentially a part of the iOS version. In the meantime, Android’s adoption rate was increasing at an insane pace, especially in India. This was also around the time Android (and Google) started getting serious about design, and designers were starting to get serious about Android.

{::nomarkdown}
<figure class="one-up">
<img src="/images/saavn-old.jpg">
<figcaption>This is the old version of Saavn’s Android app.</figcaption>
</figure>
{:/}

### Three years of design debt.

As of July 2015, 90% of Saavn’s 14mm+ monthly traffic comes from mobile devices.

Saavn’s Android app provided their largest and most active user base, yet the app had been treated as a third-rate citizen. Our competitors were starting to take advantage of this gap in product quality. I was challenged to, at the bare minimum, make the app functional in accordance to Android’s design patterns. At best, they expected parity with the iOS app, which was in a very good place. There were no other requirements, since nobody knew how to tackle the problem (or if there were any other problems to tackle). That was my job.

Unfortunately, the last time I took a serious look at Android as a platform was in 2011 when I ditched my HTC Hero for an iPhone 4. I really had my work cut out for me.

I started studying with the Samsung Galaxy S3 for a week before realizing that the only I was going to organically understand Android’s UX &amp; UI patterns was if I switched to Android as my primary mobile device. We ordered a Nexus 5, and I switched to it full time.

As I lived with the Nexus 5, I continuously iterated on wireframes and prototypes based on what I learned about the behavior of Android apps, in addition to reading Google’s documentation and studying other apps on the market.

After talking with the Android engineering team, we decided to start from scratch and rebuild the app from the ground up.

### When to keep cross-platform parity and when to conform to platform expectations

A challenge every designer in a multi-platform environment inevitably faces is to decide when certain design patterns are worth keeping or throwing away, especially when the existing system designed was built on a different platform. The solution, as always, depends on context. Users have certain expectations when using an app on their platform of choice, yet you need to ensure your products have a consistent experience.

{::nomarkdown}
<figure class="one-up">
<img src="/images/saavn-ios-android.jpg">
<figcaption>The new Android app on the left, and the iOS app on the right.</figcaption>
</figure>
{:/}

### Saavn for iOS

Saavn for iOS has always operated in a tabular manner. There are three tabs at the bottom for the player, navigation, and search, respectively. For any other application, it’s not out of the ordinary. When taking just music apps into account however, the only app that does something similar to this is Apple’s stock Music app.

There are always certain interface patterns that users of any platform have come to expect from applications developed for said platform. In Android, one of them is the positioning of the search icon in the action bar. If we made that change for our app, this would leave navigation and the player as the two tabs in the bottom bar. Not ideal.

In that case, I thought, why not blow it up? There is another expectation users have from their music apps: a fixed player bar at the bottom which tends to expand into a full screen player view.

{::nomarkdown}
<figure class="two-up">
<video preload="auto" autoplay loop muted>
<source src="http://i.imgur.com/iOwho50.webm" type="video/webm">
<source src="http://i.imgur.com/iOwho50.mp4" type="video/mp4">
</video>
<figcaption>This is how the player collapses and expands.</figcaption>
</figure>
{:/}

### Does conforming to standards provide the best experience for our users?

One of the main contributing factors for the decision to demolish the existing app was our behavior metrics. Deciding out whether or not this was the right move to make involved some user research. We studied behavior metrics in our existing apps to figure out which usage patterns worked gave users the most trouble, and which ones worked really well.

As it turns out, due to complete lack of parity with official standards and other apps, there was no assumption that could be made. We needed to make some assumptions, ship, then adjust based on new metrics.

### The importance of designing for the lowest common denominator

When designing for the ‘developing’ world, it’s important to make sure that the app can run well on a 2G connection. Throw in music streaming, album art downloads, and playlist downloads, and you’ve got a real challenge. We also needed to optimize the size of the app download.

(Did you know that telecom companies in India are required by law to send their customers free notifications at regular intervals of data usage to inform them of how much they just used?)

I approached the design with a ‘low bandwidth first’ mentality. I made sure that the designs did not rely on images to be informative and functional, and yet looked rich and fun to use with a solid data connection.

The term graceful degradation implies that the default state contains data intensive media. In contrast, we engineered the app so that everything was additive.

{::nomarkdown}
<figure class="two-up">
<img src="/images/saavn-small-album.png">
<figcaption>Some of the views I considered when designing for small screens and in areas of low connectivity, two of our major common demoninators. Music streaming always takes priority, so everything else takes a back seat.</figcaption>
<img src="/images/saavn-small-my-music.png">
<img src="/images/saavn-small-player.png">
</figure>
{:/}

{::nomarkdown}
<figure class="two-up">
<video preload="auto" autoplay loop muted>
<source src="http://i.imgur.com/GDoj2ZX.webm" type="video/webm">
<source src="http://i.imgur.com/GDoj2ZX.mp4" type="video/mp4">
</video>
<figcaption>An illustration of progressive enhancement while browsing. It’s less apparent here due to the presence of a stable Internet connection.</figcaption>
</figure>
{:/}

### Spending time on the details

It’s paramount to ensure that details are not overlooked. How does the text animate states when you slide up the player bar? What happens to the header when you scroll? How do you display contextual information that’s not available when you’ve scrolled?

The best way to make these details come to life was to code it myself in Java. The last time I wrote Java had been nearly 10 years ago, so it was time to brush up.

We wrote a basic program to pick out color from album art in order to paint contextual headers. If there’s not enough bandwidth, we paint it our brand green instead.

{::nomarkdown}
<figure class="two-up">
<video preload="auto" autoplay loop muted>
<source src="http://i.imgur.com/y66S9rN.webm" type="video/webm">
<source src="http://i.imgur.com/y66S9rN.mp4" type="video/mp4">
</video>
<figcaption>Here, you can see where the contextual headers are painted and get an idea of the colors that are picked.</figcaption>
<video preload="auto" autoplay loop muted>
<source src="http://i.imgur.com/jGMZGDZ.webm" type="video/webm">
<source src="http://i.imgur.com/jGMZGDZ.mp4" type="video/mp4">
</video>
<figcaption>Here are some additional animations and details I designed and developed.</figcaption>
</figure>
{:/}

You can download the most recent version of the Saavn app [here](http://play.google.com/store/apps/details?id=com.saavn.android).

_It was a pleasure to have built this with [Jaikaran Sawhny](https://twitter.com/drakmog), Ramesh Sudini, and Prateek Garg._
