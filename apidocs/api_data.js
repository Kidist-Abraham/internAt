define({ "api": [
  {
    "type": "post",
    "url": "/user/",
    "title": "Create User",
    "name": "CreateUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "role",
            "description": "<p>The role of the User. If not provided, it will set to intern by default.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the User. If not provided, it will set to intern by default.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date on which the User entry was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>The date on which the User entry was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {        \n             \"role\": \"intern\",\n\t\t _id: '58a1ea8b36dfb71d975384af',\n\t\temail: \"john.doe@example.com\",\n \tpassword: \"$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy\",\n\t\tdate_created: 2017-02-13T17:19:08.404Z,\n\t\tdate_modified: 2017-02-13T17:19:08.404Z,\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "Get User",
    "name": "GetUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The email of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The hashed password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>The role of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_created",
            "description": "<p>The date on which the User entry was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date_modified",
            "description": "<p>The date on which the User entry was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t{\n  \"role\": \"intern\",\n  \"date_created\": \"2019-10-23T17:54:34.858Z\",\n  \"date_modified\": \"2019-10-23T17:54:34.858Z\",\n  \"_id\": \"5db093dabbe68636db4af54c\",\n  \"email\": \"cb@dd\",\n  \"password\": \"$2b$10$s4yvt4V0h0M8NbBe5UJjsOYMUFPK1NK3GmC4m/81FwA.6z2aZGX5u\",\n  \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Auth",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": " {\n\t\"email\": \"john.doe@example.com\",\n\t\"password\": \"plain-text-password\",\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message confirming success of Authentication.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>The JWT token for the logged in user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t {\n\t\t message: 'Auth Successful',\n \t token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI1YmQ2ZjRjZTFlMWZmOTUwNzg2Y2Y4MmEiLCJpYXQiOjE1NDA4MTc1MzcsImV4cCI6MTU0MDgyMTEzN30\"\n\t }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/authRoutes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/companies",
    "title": "Create Company",
    "name": "CreateCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t{\n    \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\"\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "delete",
    "url": "/companies/:companyId",
    "title": "Delete Company",
    "name": "DeleteCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company to be deleted.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>A message confirming success of comapny deletion</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (The updated company):",
          "content": "{\n    \"message\": \"Company successfully deleted\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies",
    "title": "Get all companies",
    "name": "GetAllCompanies",
    "group": "Company",
    "version": "0.0.1",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the newly created Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[ {\n        \"_id\": \"5db44378dabe471c620daeb7\",\n        \"name\": \"Qene\",\n        \"email\": \"qene@gm\",\n        \"city\": \"AA\",\n        \"catagory\": \"Tech\",\n        \"field\": \"Game \",\n        \"description\": \"A Gaming Company .....\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5db443d2dabe471c620daeb8\",\n        \"name\": \"Tikur Ambesa\",\n        \"email\": \"tikur@gm\",\n        \"city\": \"AA\",\n        \"catagory\": \"Health\",\n        \"field\": \"General hospital\",\n        \"description\": \"A .....\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/companies/:companyId",
    "title": "Get Company",
    "name": "GetCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company to be .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company 4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\t HTTP/1.1 201 Created\n\t{\n    \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  },
  {
    "type": "put",
    "url": "/companies/:companyId",
    "title": "Update Company",
    "name": "UpdateCompany",
    "group": "Company",
    "version": "0.0.1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "companyId",
            "description": "<p>The ID of the Company to be updated.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\t{\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA and Silicon Valley\n\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"description\": \"A Gaming Company .....\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>The ID of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The email of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>The city of the Company.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "catagory",
            "description": "<p>The catagory of the company's PLC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "field",
            "description": "<p>The specific area of the company 4</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>a brief description of the company</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response (The updated company):",
          "content": "\t HTTP/1.1 201 Created\n\t{\n    \"_id\": \"5db44378dabe471c620daeb7\",\n    \"name\": \"Qene\",\n    \"email\": \"qene@gm\",\n    \"city\": \"AA\",\n    \"catagory\": \"Tech\",\n    \"field\": \"Gaming  \",\n    \"__v\": 0\n }",
          "type": "json"
        }
      ]
    },
    "filename": "api/routes/companyRoutes.js",
    "groupTitle": "Company"
  }
] });
