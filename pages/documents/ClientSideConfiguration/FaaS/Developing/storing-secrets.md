---
pagename: Secret Storage
keywords:
sitesection: Documents
categoryname: "Client Side Configuration"
documentname: Function as a Service
subfoldername: Developing with FaaS
permalink: function-as-a-service-developing-with-faas-storing-secrets.html
indicator: both
---

The FaaS Secret Storage allows you to centrally store, access and distribute secrets across your lambdas.
Thereby lambdas can use available access tokens, certificates & encryption keys to establish a connection to external systems.

**Note:** It is recommended to always use access tokens for authentication to external services. Never store **user-credentials** within the FaaS Secret Storage.

Internally FaaS uses [HashiCorp Vault](https://www.hashicorp.com/products/vault/) to encrypt your secrets using a 256-bit AES cipher in GCM mode with a randomly generated 96-bit nonce before writing them to its persistent storage.

Secrets can be maintain via the **Settings** tab as a key/value storage. Each value can be of type number, string or JSON.

[Missing Screenshot]: <> (Let's add a screenshot of the Setting-Vault screen here.)

Based on the [permission concept](function-as-a-service-getting-started.html#set-faas-permissions) of FaaS the following permissions for managing and using secrets can be distributes across different users.

<table>
<thead>
  <tr>
    <th>User Role</th>
    <th>User Permission</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>FaaS-Admin</td>
    <td>In order to keep the management of the secrets more restrictive and dedicated to a single user. Only the FaaS Admin is able to create, edit, delete & read a secret.</td>
  </tr>
  <tr>
    <td>FaaS-Developer</td>
    <td>This user is only able to use all available secrets within functions via its unique key.</td>
  </tr>
</tbody>
</table>

Within lambdas the Toolbelt offers a convenient way of reading and updating secrets at runtime. See [this](function-as-a-service-developing-with-faas-toolbelt.html) Toolbelt documentation for further details.
