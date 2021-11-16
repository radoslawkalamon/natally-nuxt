<template>
  <WrappersSection
    class="list-stories-main"
    data-test="blocks-list-stories-main"
  >
    <template #header>
      <ComponentsTitle
        class="list-stories-main__title"
        :design="2"
        title="Opowiadania"
        :type="2"
      />
    </template>

    <WrappersListStories class="list-stories-main__stories">
      <template #default="{ metaPostStories }">
        <template v-for="metaPostStory in metaPostStories">
          <ComponentsCardStory
            :key="metaPostStory.path"
            :meta-post-story="metaPostStory"
          />
        </template>
      </template>
    </WrappersListStories>
  </WrappersSection>
</template>

<script src="./ListStoriesMain.ts" lang="ts"></script>
<style src="./ListStoriesMain.css" scoped></style>
