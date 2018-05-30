<template>
    <div class="postFeed">
       <div class="createPost">
           <div class="createPost__title">
               <h2>CREATE POST</h2>     
               <icon class="createPost__icon" name="pencil" scale="1.5"></icon>
               <input type="text" class="form__input" placeholder="Title" id="title" required>           
           </div>
           <div class="createPost__content">
                    <textarea rows="8" cols="50" placeholder="Whats on your mind?" id="content" required></textarea>     
           </div>
           <button class="btn btn--white btn--animated">SUBMIT</button>
       </div>

       <div class="newPost">
           <div class="newPost__banner">
               <div class="newPost__header">
               <div class="newPost__title">
                   New Post Title
               </div>
               <div class="newPost__date">
                   WEDNESDAY - 12/12/12
               </div>

           </div>
               
           </div>
           <div class="newPost__content">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nihil fuga molestias exercitationem culpa sed, autem laborum perferendis dolorum neque doloremque nulla, asperiores numquam eos dolores dolore dignissimos at accusamus!
           </div>
           <div class="newPost__footer">
               <div class="newPost__comments footer__item">
                   <icon class="newPost__icon" name="comments" scale="1.8"></icon>
                   <span>32</span>
                </div>
               <div class="newPost__likes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-up" scale="1.8"></icon>
                   <span>42</span>
               </div>
               <div class="newPost__dislikes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-down" scale="1.8"></icon>
                   <span>10</span>
                </div>
           </div>
       </div>

       <div class="newPost">
           <div class="newPost__banner">
               <div class="newPost__header">
               <div class="newPost__title">
                   New Post Title
               </div>
               <div class="newPost__date">
                   WEDNESDAY - 12/12/12
               </div>

           </div>
               
           </div>
           <div class="newPost__content">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nihil fuga molestias exercitationem culpa sed, autem laborum perferendis dolorum neque doloremque nulla, asperiores numquam eos dolores dolore dignissimos at accusamus!
           </div>
           <div class="newPost__footer">
               <div class="newPost__comments footer__item">
                   <icon class="newPost__icon" name="comments" scale="1.8"></icon>
                   <span>32</span>
                </div>
               <div class="newPost__likes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-up" scale="1.8"></icon>
                   <span>42</span>
               </div>
               <div class="newPost__dislikes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-down" scale="1.8"></icon>
                   <span>10</span>
                </div>
           </div>
       </div>

       <div class="newPost">
           <div class="newPost__banner">
               <div class="newPost__header">
               <div class="newPost__title">
                   New Post Title
               </div>
               <div class="newPost__date">
                   WEDNESDAY - 12/12/12
               </div>

           </div>
               
           </div>
           <div class="newPost__content">
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nihil fuga molestias exercitationem culpa sed, autem laborum perferendis dolorum neque doloremque nulla, asperiores numquam eos dolores dolore dignissimos at accusamus!
           </div>
           <div class="newPost__footer">
               <div class="newPost__comments footer__item">
                   <icon class="newPost__icon" name="comments" scale="1.8"></icon>
                   <span>32</span>
                </div>
               <div class="newPost__likes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-up" scale="1.8"></icon>
                   <span>42</span>
               </div>
               <div class="newPost__dislikes footer__item">
                   <icon class="newPost__icon" name="thumbs-o-down" scale="1.8"></icon>
                   <span>10</span>
                </div>
           </div>
       </div>

       <div class="addMore">
            <div class="addMore__button element__title">
                <h4>Load more posts</h4> 
                <icon class="element__icon" name="plus-square" scale="1.5"></icon>
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
        padding: 5rem 6rem 3rem 3rem;
    }

    .createPost,
    .newPost {
        background-color: #f1f1f1;
        margin-bottom: 5rem;
        box-shadow: var(--shadow-light);
    }

    .createPost {
        //clip-path:polygon(0 0, 100% 0, 100% 100%, 60% 100%, 60% 85%, 0 85%);
        max-width: 500px;
        border-radius: 5px;
        padding: 3rem;
        background-image: linear-gradient(0deg, #6a36a1, #a758f6);

        &__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            & h2 {
                color: white;
                flex: 0 0 18rem;
                align-self: center;
            }

            & input {
                align-self: stretch;
                flex: 0 0 1;
                width: 50%;
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
            margin: 2rem 0 0;
            padding: 10px 40px;
            font-size: 15px;
            font-weight: 600;
            color: #7739b5;
        }

        .newPost:nth-last-of-type(1) {
            margin-bottom: 0;
        }
    }

    .newPost {

        transition: all .3s;

        & > * {
            padding: 3rem 3rem 1rem 3rem;
        }

        //& > *:nth-last-of-type(1) {
         //   padding-bottom: 3rem;
        //}

        &__banner {
            padding: 0;
            position: relative;
            width: 100%;
            height: 18rem;
            background-image: linear-gradient(transparent, var(--color-primary-highlight)), url("../../assets/img/paintBg01.jpg");
        }
        &__header {
            clip-path:polygon(0 0, 80% 0, 100% 100%, 0 100%);
            width: 80%;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            background-image: linear-gradient(to right bottom, #8f43db87, #a758f68c);
            padding: .5rem 2rem;
            color: #fff;
        }

        &__title {
            font-size: 3rem;
        }

        &__date {
            padding-right:5rem;
            align-self: flex-end;
            font-size: 1.25rem;
        }

        &__content {

        }

        &__footer {
            display: flex;
            justify-content: space-between;

            span {
                background-color:var(--color-primary-highlight);
                padding: .5rem;
                border-radius: 100px;
                color: white;
                font-size: 1rem;
                position: relative;
                bottom: 20px;
                right: 5px;
            }

        }

        &__comments {
            margin-left: 1rem;
        }

        &__likes {
            margin-left: auto;
        }

        &:hover {
            transform: translateY(-7px);
        }
    }

    .footer {

        &__item {
                margin-right: 1rem;
            }
    }

    input,
    textarea {
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        background-color: #cd9cff;
        transition: all .3s;
        color: white;
        font-size: 16px;

        &:focus {
            background-color: #d8b4fd;
        }
    }

    svg.createPost__icon.fa-icon {
        color: white!important;
    }

    svg.newPost__icon.fa-icon {
        color: #000;
    }

    ::placeholder {
        color: white;
    }

    .element__title {
        text-align: center;
        font-size: 1.9rem;
        background-image: linear-gradient(to right bottom, #8f43db, #a758f6);
        color: #fff;
        padding: 1.25rem 0;
        margin: -1.4rem 0 1.75rem;
        text-transform: uppercase;
    }

    .addMore__button {
        margin-top: 2rem;
        padding: 2rem 0;
        border-radius: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h4 {
            margin-bottom: -5px;
            align-self: center;
            padding-right: 1rem;
        }
    }
    
</style>

