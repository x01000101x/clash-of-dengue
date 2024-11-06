import axios from "axios";
// const url = "https://api.clashofdengue.com/api";
const url = "http://127.0.0.1:8000/api";

export default {
  async authRegister(request) {
    const func = "Reigster User";
    const endpoint = url + "/auth/register";
    try {
      console.debug(func, request);
      const response = await axios.post(endpoint, request, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async authLogin(request) {
    const func = "Login User";
    const endpoint = url + "/auth/login";
    const bodyRequest = {
      username: request.username,
      password: request.password,
    };
    try {
      console.debug(func, bodyRequest);
      const response = await axios.post(endpoint, bodyRequest, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async authLogout(request) {
    const func = "Logout User";
    const endpoint = url + "/auth/logout";
    const token = request.token;
    try {
      console.debug(func, token);
      const response = await axios.post(
        endpoint,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async getScore(request) {
    const func = "Get Score User";
    const endpoint = url + "/score";
    const token = request.token;
    try {
      console.debug(func, request.id);
      const response = await axios.get(`${endpoint}/${request.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },

  async getUser(request) {
    const func = "Get User Profile";
    const endpoint = url + "/user";
    const token = request.token;
    try {
      console.debug(func, request.id);
      const response = await axios.get(`${endpoint}/${request.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async getQuiz(request) {
    const func = "Get Quiz";
    const endpoint = url + "/question";
    const token = request.token;
    try {
      console.debug(func);
      const response = await axios.get(`${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async updateScore(request) {
    const func = "Update Score";
    const endpoint = url + "/score";
    const bodyRequest = {
      is_correct: request.is_correct,
      score: request.score,
    };
    const token = request.token;
    try {
      console.debug(func, bodyRequest);
      const response = await axios.post(
        `${endpoint}/${request.id}`,
        bodyRequest,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async editUser(request) {
    const func = "Edit User";
    const endpoint = url + "/user";
    const bodyRequest = {
      ...request.req,
    };
    const token = request.token;
    try {
      console.debug(func, bodyRequest);
      const response = await axios.patch(endpoint, bodyRequest, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async getSession(request) {
    const func = "Get Session";
    const endpoint = url + "/session";
    const token = request.token;
    try {
      console.debug(func);
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async validateSession(request) {
    const func = "Validate Session";
    const endpoint = url + "/validate-session";
    const bodyRequest = {
      user_id: request.id,
      session_id: request.session,
    };
    const token = request.token;
    console.log("request", request);

    try {
      console.debug(func, bodyRequest);
      const response = await axios.post(endpoint, bodyRequest, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async questionSession(request) {
    const func = "Question Session";
    const endpoint = url + "/question-session";
    const bodyRequest = {
      session_id: request.session,
    };
    const token = request.token;
    try {
      console.debug(func, bodyRequest);
      const response = await axios.post(endpoint, bodyRequest, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
  async getAllUser(request) {
    const func = "Get All User";
    const endpoint = url + "/user";
    const token = request.token;
    try {
      console.debug(func);
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },

  async getRank(request) {
    const func = "Get Rank";
    const endpoint = url + "/getRank";
    const token = request.token;
    try {
      console.debug(func);
      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Something went wrong");
      } else {
        throw new Error("Network error: " + error.message);
      }
    }
  },
};
