function loadSupport(){
    const content = document.querySelector('.content');
    const support = document.createElement('div');
    support.innerHTML = `
    <div class="support">
            <h1 class="support-heading">Need <span class="orange">Help?</span></h1>
            <form class="support-form">
                <label for="email" class="label">
                    Email Adress: <input type="email" name="email" id="email" class="input">
                </label>
                <label for="phone" class="label">
                    Phone Number: <input type="tel" class="input">
                </label>
                <label for="problem" class="label">
                    What is the issue?<textarea name="problem" id="problem" cols="30" rows="10" class="textarea"></textarea>
                </label>
                <button class="form-btn">Submit</button>
            </form>
        </div>`;
  
      content.insertAdjacentHTML('afterbegin',support.innerHTML);
  }
  
  export default loadSupport