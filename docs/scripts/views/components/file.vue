<template>
  <div :class="[$tt('body1'), 'demo--file']">
    <header class="hero component">
      <ui-file></ui-file>
    </header>

    <ui-toc-affix withoutCss></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-file
          accept="image/*"
          @change="$balmUI.onChange('files1', $event)"
        ></ui-file>
        <p>Files: {{ files1 }}</p>
      </div>
      <ui-snippet :code="code[1]"></ui-snippet>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 Multiple + Preview</h6>
        <ui-file
          accept="image/*"
          multiple
          preview
          @change="$balmUI.onChange('files2', $event)"
        ></ui-file>
        <transition-group class="preview-list" name="list" tag="ul">
          <li class="item" v-for="(file, index) in files2" :key="file.uuid">
            <div class="inner">
              <span class="preview" :style="setBg(file)"></span>
              <span class="name">{{ file.name }}</span>
            </div>
          </li>
        </transition-group>
      </div>
      <ui-snippet :code="code[2]"></ui-snippet>

      <div class="example">
        <h6 :class="$tt('headline6')">1.3 Classics Upload</h6>
        <transition-group class="preview-list" name="list" tag="ul">
          <li v-for="(file, index) in files3" :key="file.uuid" class="item">
            <div class="inner">
              <span class="preview" :style="setBg(file)"></span>
              <span class="actions">
                <ui-fab
                  v-if="!file.uploaded"
                  icon="file_upload"
                  mini
                  @click="upload(file)"
                ></ui-fab>
                <ui-fab icon="delete" mini @click="remove(index)"></ui-fab>
              </span>
            </div>
          </li>
          <li v-if="files3.length < limit" key="add" class="item add-btn">
            <div class="inner">
              <ui-file accept="image/*" multiple preview @change="onChange">
                <ui-icon class="add-icon">add</ui-icon>
              </ui-file>
            </div>
          </li>
        </transition-group>
        <ui-button raised @click="uploadAllFiles">
          <template #before="{ iconClass }">
            <ui-icon :class="iconClass">file_upload</ui-icon>
          </template>
          Upload All
        </ui-button>
      </div>
      <ui-snippet :code="code[3]"></ui-snippet>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.file"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - File'
  },
  mixins: [snippets],
  data() {
    return {
      // demo
      files1: [],
      files2: [],
      files3: [],
      limit: 5,
      postUrl: 'https://jsonplaceholder.typicode.com/posts'
    };
  },
  created() {
    this.initDocs('file', {
      code: 3,
      apis: ['file']
    });
  },
  methods: {
    setBg({ previewSrc }) {
      return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
    },
    onChange(files) {
      if (files.length > this.limit - this.files3.length) {
        this.$toast(`Image Limit: ${this.limit}`);
      } else {
        files.forEach(file => {
          file.uploaded = false;
          this.files3.push(file);
        });
      }
    },
    async upload(file) {
      try {
        let response = await this.$http.post(this.postUrl, {
          file: file.sourceFile
        });
        file.uploaded = true;
        console.log(`${file.name} is uploaded`);
      } catch (e) {
        // your code
      }
    },
    uploadAllFiles() {
      if (this.files3.length) {
        this.files3.forEach(file => {
          this.upload(file);
        });
      } else {
        this.$toast('No files');
      }
    },
    remove(index) {
      this.files3.splice(index, 1);
    }
  }
};
</script>
