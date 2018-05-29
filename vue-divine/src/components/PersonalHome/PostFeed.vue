<template>
    <div class="postFeed">
       <div class="createPost">
           <div class="createPost__title">
               <h2>CREATE POST</h2>     
                    <input type="text" class="form__input" placeholder="Title" id="title" required>           
           </div>
           <div class="createPost__content">
                    <textarea rows="5" cols="50" placeholder="Whats on your mind?" id="content" required></textarea>     
           </div>
           <button class="btn btn--white btn--animated">POST</button>
       </div>

       <div class="newPost">
           <div class="newPost__banner">

           </div>
           <div class="newPost__header">
               <div class="newPost__title">
                   New Post Title
               </div>
               <div class="newPost__date">
                   WEDNESDAY - 12/12/12
               </div>
               
           </div>
           <div class="newPost__content">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nihil fuga molestias exercitationem culpa sed, autem laborum perferendis dolorum neque doloremque nulla, asperiores numquam eos dolores dolore dignissimos at accusamus!
           </div>
           <div class="newPost__footer">
               <div class="newPost__likes">LIKES-32</div>
               <div class="newPost__comments">COMMENTS-12</div>
           </div>
       </div>
      


    </div>
</template>

<script>

export default {
  components: {
      
  },
  data: function () {
            return {
               
            }
        }
}

</script>

<style lang="scss" scoped>

    .postFeed {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 5rem;
    }

    .createPost,
    .newPost {
        background-color: rgb(22, 241, 168);
        margin-bottom: 2rem;
        box-shadow: var(--shadow-light);
    }

    .createPost {
        width: 500px;
        padding: 3rem;

        &__title {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            & h2 {
                flex: 0 0 18rem;
                align-self: center;
            }

            & input {
                align-self: stretch;
                flex: 0 0 1;
                width: 100%;
                min-width: 10rem;
            }
        }


        &__content {
            
            & textarea {
                width: 100%;

                margin-top: 1.5rem;
                resize: none;

                &::placeholder {
                
                }
            }
        }

        button {
            float: right;
            margin: 1rem 0 0;
        }

        .newPost:nth-last-of-type(1) {
            margin-bottom: 0;
        }
    }

    .newPost {

        &__banner {
            width: 100%;
            height: 12rem;
            background-color: black;
        }
        &__header {
            display: flex;
            justify-content: space-between;
        }

        &__title {

        }

        &__date {

        }

        &__content {

        }

        &__footer {
            display: flex;
        }

        &__comments {
            margin-left: 1rem;
        }

        & > * {
            padding: 3rem 3rem 0;
        }

        & > *:nth-last-of-type(1) {
            padding-bottom: 3rem;
        }
    }
    
</style>

