---
title: COTA Clinic
date: 2014-10-26
tags: portfolio
category: portfolio
company: COTA
thumbnail: /images/thumb-cotaclinic@2x.png
color: blue
description: I designed and helped implement an Angular based application to facilitate manual data ingestion, verification, and entry of medical records.
description_image: /images/thumb-adigitaldesigner.png
meta: COTA · October 2014 — April 2016
---

***Note:** You can view the prototype for this project [here](https://invis.io/2F5TH6BH5), but it requires a password. Need one? [Get in touch](mailto:hi@deepshah.com)!*

When I joined COTA in the fall of 2014, the broader key goals somewhat illusive, but there was a tangible immediate one. The idea behind the company was to use data, in some way, to empower healthcare providers and other healthcare institutions to make better healthcare decisions so patients can have more meaningful outcomes. There was no unifying product vision surrounding it yet. Along with the product manager and two engineers, we composed a multi-step roadmap — first, we needed to find a way to ingest data.

{::nomarkdown}
<figure>
<img src="/images/clinic-flow-1.jpeg">
<img src="/images/clinic-flow-2.jpeg">
<figcaption>Initial flow ideas and whiteboards.</figcaption>
</figure>
{:/}

The state of data in healthcare is miserable, to say the least. There are no standard data formats, data structures, technologies, or pipelines (with the exception of a transfer protocol known as HL7). Data health is another matter entirely; most institutions have incomplete data tables, and the rest is hidden in transcribed or handwritten notes. Building a machine learning algorithm would take time, and we needed to get started validating and filling in data right away. It would require human input.

To research best abstraction practices, I shadowed nurses and doctors at a hospital in order to better understand daily flows. A few weeks later, I came to a better understanding of the disparity between an atomic/abstract data model and ease of flow for abstraction.

<img src="/images/clinic-1.png">
<img src="/images/clinic-2.png">
<img src="/images/clinic-3.png">
<!-- <img src="/images/clinic-4.png"> -->
<img src="/images/clinic-5.png">

I made an initial design based on observations, hypotheses I wanted to test, and assumptions. We shipped it in a month. Once it began use within our small army of abstractors, I was able to test a lot of my hypotheses. Some of them being correct, but several were incorrect and required more research and iteration. I used a combination of Intercom, Mixpanel, and user research sessions to figure out what exactly the problems were. The biggest offender was the treatments flow.

Many of the underlying assumptions about the data model were incorrect, particularly for drugs and regimens within treatments. The flow as a result was inefficient, and cost the abstractors precious time. I was only able to narrow it down to treatments by tracking various completion times within Mixpanel. User feedback was not particularly helpful for this part, as it ranged from “this is taking too long” all the way to “this button doesn’t really make sense to me”. I was able to backtrack from there with a series of user sessions and subsequent testing.

<img src="/images/clinic-6.png">
<img src="/images/clinic-7.png">
<img src="/images/clinic-8.png">
<img src="/images/clinic-9.png">

***Note:** You can view the prototype for this project [here](https://invis.io/2F5TH6BH5), but it requires a password. Need one? [Get in touch](mailto:hi@deepshah.com)!*

There are always plenty of improvements that can be made, but this paved the way for us to have a healthy foundation of data. Next up, we used the data to glean patterns and insights into the most important elements to surface for our analytics platform. Read it about it [here](/cota-analytics/).
