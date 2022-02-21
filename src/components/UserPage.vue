<template>
  <div v-if="user">
    <my-header />
    <img
      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPDxUPDw8PDw8PDw8PDw8PFQ8PFQ8PFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ8PFS0dFR0tLS0tLS0rKy0tLS0tLS0tLS0tLS0tLS0rKy0tKy0tLS0tLS0tLS0rLS0tLS0tLS0tN//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAkEAEBAQACAQQCAgMAAAAAAAAAEQECEgMEITFBE1FhoXGBkf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIF/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD5m6JpXtPSUxARSpTdBUqbqAomgipqUAiRQFEUAqAiiYoAIAABSiAoQEAAVBAaqVmlBqlZpQWlZoDrqVd1mjtaVEoNDNWgqJQRalRQKIUGhkEaolSgtKlAWlQBarIIqsgNCZm78ZXTPBsoOapvt7L10EHTfDtzPmufLjufOQEKm4QACAAggqAOtZ0qI0BKlEaozSg1RlQXSsgi0QBqogC03TMNxUSlQz9Yg1Q6b+tTAWm47cPBfb7ezx+mz/KrHzK6+Hw7y+H1OPg459ZXTOCEcfB6fOOfz9u348aiiuPL0/HfrG/w5+nTAHL8Rviz7zHVNBx3xZ9Y48/Dj1M6D5Hm8XVzfT83izc93g8vi6q53HNAEAEF1KiDRaai5w35EKVGuoJSvR4PSby+d9nr8fpMz+Qj5i5l+H1eXpOO/TXh9PnHJn9hHy+Ph3fr/b1+P0WT399e3jxjeYLMfL8nodz4PD6PeWXdj6u4nHiJMfP4+inzrXP0mb/D3bxZ6g83j8OSZjvw8WZ8GcWwY5eKuPk9Pm/L0mg4Z4v6d+OMtUGsVjstBoqM7oNUrNKC0rNTdBqs8tKmgzyeb1XH2ejWOSo+Wj1+o8WfTybg53ABEMym5rvx4ezecCNo48fBsr18eKZjWaoucc/WOnHx8f0xxdeIN8eOY1WKtBvNWudWiNVa507A6Urn2Pu+/wCvnZ/z4RHWjn2TeQN7qVz7FUbpWKUG91GaUHRc1zzV7A6M7qdk3kgtKxU3VG91KxSg1SsUoLupozoMc3Hn48131neIjw8uMR7OXhzWfxYiRrOMXCritBcRQdOOOma45yaoOlKx2TsI6UrlSg60rn2OwjpSuXY7A61K59jsDpUrn2OwOlK51OwOtK5dlzkDrTNc6ZoOlTdY7FBupusUoNVOzNSg32M1ilEbqVmlBRmlBqpUqUGc1qudKO3XNK5djsDrSuXY7A7djs49zuI7Url2OwOtTs5djuI69k7OXc7COtOzl3TsDrSudKDp2K50oOnZezlV7A6dlrlVoOnYrl2XsDpulc6tBqlY7FBqlYqdgdKVjsdhG6lZpQaqs0oOVKzTNRo1SoAtSoQRadkQRrsVlQXslIiotWoAq4hQbKxSg3Ssdig3UrFKI3U7MVKFb7L2c6lQdex2cqUK69js5UoV07HZzq0K3SsUqldKVilQdKvZyq1RnNXNZactAoKhVqJug1UrNM0RsSm6CjNKI0lSpQapWalEapWSg1SsUEaqVkBqpWaINUrKgtEUAEBVRVQVFFAAFSgKM0qNWkSpuiNMlSiG6VmgOmckrAI3SsUpUbpWKtBqpUqUGqrFKI0M9ig0M0oNEZq5oKJupug0Vmpug3SsII6UrnVB0pXOrQbpXOrQdKVzpVVoBy1EAQQBE0AAAQAAAECoKhQEFgCguoACAFKgIogCoAKIAogIoAoIA//Z"
      alt=""
      style="width: 1600px; height: 100px"
    />
    <div id="main">
      <p id="pName">{{ user.name }}</p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/000000/external-user-interface-kiranshastry-solid-kiranshastry-1.png"
        />
        <span> Name: </span>
        {{ user.name }}
      </p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/external-becris-lineal-becris/12/000000/external-user-avatars-becris-lineal-becris-1.png"
        /> <span> Account name: </span> {{ user.accName }}
      </p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/12/000000/external-email-interface-kiranshastry-lineal-kiranshastry.png"
        />
        <span> E-mail: </span>
        {{ user.eMail }}
      </p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/material-sharp/12/000000/star--v1.png"
        />
        <span> Status:  </span>
        {{ user.status }}
      </p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/12/000000/external-clock-man-accessories-kiranshastry-lineal-kiranshastry.png"
        />
        <span> Start date:  </span>
        {{ user.startDate }}
      </p>
      <br />
      <p>
        <img
          src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/12/000000/external-clock-man-accessories-kiranshastry-solid-kiranshastry.png"
        />
        <span> Expiration date:  </span>
        {{ user.expirationDate }}
      </p>
    </div>
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
export default {
  data() {
    return {
      user: null,
      users: null,
    };
  },
  created() {
    const userData = localStorage.getItem("users-list");
    if (userData) {
      this.users = JSON.parse(userData);
    }
    const user = this.users.find((user) => user.id == this.$route.params.id);
    if (user) {
      this.user = user;
    }
  },
  components: {
    MyHeader,
  },
};
</script>

<style scoped>
span {
  color: rgb(235, 129, 0);
}
#main {
  width: max-content;
  height: max-content;
  padding-left: 300px;
  padding-top: 20px;
}

#pName {
  font-size: 1.6rem;
}
</style>