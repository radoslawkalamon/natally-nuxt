<template>
  <WrappersSection
    class="list-stories-suggestions"
    data-test="blocks-list-stories-suggestions"
  >
    <template #header>
      <ComponentsTitle
        class="list-stories-suggestions__title"
        :design="2"
        title="Opowiadania"
        :type="2"
      />
    </template>

    <WrappersListStories
      class="list-stories-suggestions__stories"
      :limit="storiesQuantity"
      :randomize="true"
    >
      <template #loader>
        <template v-for="i in storiesQuantity">
          <ComponentsCardStoryPlaceholder :key="i" />
        </template>
      </template>
      <template #default="{ metaPostStories }">
        <template v-for="metaPostStory in metaPostStories">
          <ComponentsCardStory
            :key="metaPostStory.path"
            :meta-post-story="metaPostStory"
          />
        </template>
      </template>
    </WrappersListStories>

    <template #footer>
      <ComponentsButtonLink
        label="Więcej opowiadań"
        to="/"
      />
    </template>
  </WrappersSection>
</template>

<script src="./ListStoriesSuggestions.ts" lang="ts"></script>
<style src="./ListStoriesSuggestions.css" scoped></style>
