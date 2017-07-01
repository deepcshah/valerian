---
title: COTA Analytics
date: 2014-10-27
tags: portfolio
category: portfolio
company: COTA
thumbnail: /images/thumb-cotaanalytics@2x.png
color: blue
description: I designed and helped implement an analytics app to help oncology providers and other medical stakeholders use their data in order to make better medical decisions.
description_image: /images/thumb-adigitaldesigner.png
meta: COTA · Product Designer · October 2014 — April 2016
---

***Note:** You can view the prototype for this project [here](https://invis.io/QE5TH6GKN), but it requires a password. Need one? [Get in touch](mailto:hi@deepshah.com)!*

After laying down some grandwork for a stable data model in the Clinic app (read about it [here](/cota-clinic/)), I began researching aspects of the typical oncologist’s practice — which data are they missing? What’s explicitly important to them? What can benefit them that they aren’t even aware of?

How can we empower them to create more meaningful outcomes for patients?

I interviewed several practice managers and doctors, and uncovered shocking points. For examples, most practice managers or doctors don't have an estimate of how many patients walk in through their doors in a given month. In an oncology practice, they may not know how many breast cancer patients they currently have. Nor do they have an easy way of finding answers to these questions. Crudely designed EHRs (Electronic Health Records) make it almost impossible to extract data; data input alone is a tedious task.

{::nomarkdown}
<figure>
<img src="/images/analytics-early-wireframe-1.jpg">
<img src="/images/analytics-early-wireframe-2.jpg">
<figcaption>The very first rough sketches of what the app could be.</figcaption>
</figure>
{:/}

Despite the simplest count-based data points we could surface, it was clear there was a lot of potential for meaningful impact, even in surfacing simple joins for prognostic factors and demographics. The most important chart, however, is something called the Kaplan-Meier survival curve. It’s a step based curve, a given patients population starts off with an assumption of a 100% survival index. It plots survivability over a period of time, and drops off on any patient death. Over time, powerful patterns emerge. If plotting survival by stage (the most basic subset necessary), you can see how breast cancer stage 1 survival rates compare to stage 3 survival rates for a given care provider. Of course, this query can be more complex as needed. If I want to see survival rates for female breast cancer patients between the ages of 20 and 30 with stage 2 breast cancer who tested positive for estrogen receptors vs those who tested negative and were on a particular drug, that’s an immensely powerful tool.

The possibilities are endless, but it was important not to overwhelm a user population with data they may not know how to utilize or even care to do so. Or worse, they don’t by option paralysis. I decided to stage a rollout of features over time, in order to gauge reaction and iterate in real time as needed. The alternative was spending lot of time and money on a product that may end up having zero impact or usefulness.

***Note:** You can view the prototype for this project [here](https://invis.io/QE5TH6GKN), but it requires a password. Need one? [Get in touch](mailto:hi@deepshah.com)!*
