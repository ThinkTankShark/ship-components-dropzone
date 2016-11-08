var FileStore = {
   files: [],

   addFile: function(file) {
      if(file){
         this.files.push(file);
      }
   },

   getFile: function() {
      return this.files;
   }
};

module.exports = FileStore;
