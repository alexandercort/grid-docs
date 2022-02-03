---
description: How to install and set-up Grid for the first time
---

# Getting Started with Grid

## Grid Installation

### Prerequisites

1. Python

### Installation steps

The following steps will install the Grid cli tool. Grid commands can then be invoked by calling `grid <grid command> <grid command parameters>`.

1. `pip install lightning-grid --upgrade`

### Login steps

1. Visit [grid.ai](https://grid.ai)
2. Sign in/create an account
3. Click your user profile icon
4. Click 'Settings'
5. Click 'API Keys' tab

You will now see the exact command you can use to login to grid and will be authenticated to run all CLI commands :).

## Setting Up Grid

To get the full power of Grid, it is important to integrate your Github account with your Grid account. This will enable Grid to then utilize your public repositories for training. You will also have the option to give Grid access to your private repositories; by default Grid will not have read/write access to your private repositories.

### Github Integration

By default, if you've logged in with Github, you can only access public Github repositories on Grid.

To grant read access to your private code navigate to **Settings** > **Integrations** > **Grant access**.

{% hint style="info" %}
If you've logged in for the first time with Google, you will need to link a Github account and grant access to repos in the Settings page.
{% endhint %}

### About Private Code

Grid does not save your code, look at it or compromise its privacy in any way.

When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code.

## Tutorials

See the [typical web workflow](typical-workflow-web-user.md) and [typical CLI workflow](typical-workflow-cli-user.md) to get a better understanding of an end-to-end training example with Grid.&#x20;
