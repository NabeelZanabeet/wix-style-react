import React from 'react';
import classNames from 'classnames';
import { EditorState, SelectionState, Modifier, RichUtils } from 'draft-js';

import styles from './RichTextToolbar.scss';
import RichTextToolbarButton from './RichTextToolbarButton';
import RichTextToolbarLinkButton from './RichTextToolbarLinkButton';
import {
  inlineStyleTypes,
  blockTypes,
  entityTypes,
} from './RichTextInputAreaTypes';
import {
  TextAreaBold,
  TextAreaItalic,
  TextAreaUnderline,
  TextAreaLink,
  TextAreaBulletList,
  TextAreaNumberedList,
} from '../new-icons/system';

const RichTextToolbar = ({
  dataHook,
  className,
  editorState,
  onBold,
  onItalic,
  onUnderline,
  onLink,
  onBulletedList,
  onNumberedList,
}) => {
  const toggleStyle = (event, onClick, toggledStyle) => {
    event.preventDefault();

    onClick(
      RichUtils.toggleInlineStyle(
        EditorState.forceSelection(editorState, editorState.getSelection()),
        toggledStyle,
      ),
    );
  };

  const toggleBlockType = (event, onClick, toggledBlockType) => {
    event.preventDefault();

    onClick(
      RichUtils.toggleBlockType(
        EditorState.forceSelection(editorState, editorState.getSelection()),
        toggledBlockType,
      ),
    );
  };

  const toggleEntity = (linkData, onClick) => {
    const { href: url = '', text = '' } = linkData;
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      {
        url,
      },
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

    let newEditorState;
    let newSelection;

    // In case there is no selected text
    if (!selection.isCollapsed()) {
      newEditorState = EditorState.set(editorState, {
        currentContent: contentStateWithEntity,
      });
    } else {
      const startPosition = selection.getStartOffset();
      const endPosition = startPosition + text.length;

      // A key for the block that containing the start of the selection range
      const blockKey = selection.getStartKey();

      // Replaces the content in specified selection range with text
      const newContentState = Modifier.insertText(
        contentState,
        selection,
        text,
      );

      newSelection = new SelectionState({
        anchorOffset: startPosition,
        anchorKey: blockKey,
        focusOffset: endPosition,
        focusKey: blockKey,
      });

      newEditorState = RichUtils.toggleLink(
        EditorState.push(editorState, newContentState, 'insert-characters'),
        newSelection,
        entityKey,
      );
    }

    onClick(RichUtils.toggleLink(newEditorState, newSelection, entityKey));
  };

  const isStyleActive = style => {
    if (editorState) {
      const currentStyle = editorState.getCurrentInlineStyle();

      return currentStyle.has(style);
    }
  };

  const isBlockTypeActive = blockType => {
    if (editorState) {
      const selection = editorState.getSelection();
      const currentBlockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

      return currentBlockType === blockType;
    }
  };

  const isEntityActive = entity => {
    if (editorState) {
      const selection = editorState.getSelection();
      const contentState = editorState.getCurrentContent();
      const currentKey = contentState
        .getBlockForKey(selection.getStartKey())
        .getEntityAt(selection.getStartOffset());

      if (currentKey) {
        const currentEntity = contentState.getEntity(currentKey);

        return currentEntity.type === entity;
      }
    }
  };

  const buttons = [
    {
      type: inlineStyleTypes.bold,
      onClick: event => toggleStyle(event, onBold, inlineStyleTypes.bold),
      buttonComponent: RichTextToolbarButton,
      iconComponent: TextAreaBold,
      isActive: () => isStyleActive(inlineStyleTypes.bold),
      tooltipText: 'Bold',
    },
    {
      type: inlineStyleTypes.italic,
      onClick: event => toggleStyle(event, onItalic, inlineStyleTypes.italic),
      buttonComponent: RichTextToolbarButton,
      iconComponent: TextAreaItalic,
      isActive: () => isStyleActive(inlineStyleTypes.italic),
      tooltipText: 'Italic',
    },
    {
      type: inlineStyleTypes.underline,
      onClick: event =>
        toggleStyle(event, onUnderline, inlineStyleTypes.underline),
      buttonComponent: RichTextToolbarButton,
      iconComponent: TextAreaUnderline,
      isActive: () => isStyleActive(inlineStyleTypes.underline),
      tooltipText: 'Underline',
    },
    {
      type: entityTypes.link,
      onClick: linkData => toggleEntity(linkData, onLink, entityTypes.link),
      buttonComponent: RichTextToolbarLinkButton,
      iconComponent: TextAreaLink,
      isActive: () => isEntityActive(entityTypes.link),
      tooltipText: 'Insert link',
    },
    {
      type: blockTypes.bulletedList,
      onClick: event =>
        toggleBlockType(event, onBulletedList, blockTypes.bulletedList),
      buttonComponent: RichTextToolbarButton,
      iconComponent: TextAreaBulletList,
      isActive: () => isBlockTypeActive(blockTypes.bulletedList),
      tooltipText: 'Bulleted List',
    },
    {
      type: blockTypes.numberedList,
      onClick: event =>
        toggleBlockType(event, onNumberedList, blockTypes.numberedList),
      buttonComponent: RichTextToolbarButton,
      iconComponent: TextAreaNumberedList,
      isActive: () => isBlockTypeActive(blockTypes.numberedList),
      tooltipText: 'Numbered List',
    },
  ];

  return (
    <div data-hook={dataHook} className={classNames(className, styles.root)}>
      {buttons.map((button, index) => {
        const {
          type,
          onClick,
          buttonComponent: Button,
          iconComponent: Icon,
          isActive,
          tooltipText,
        } = button;

        return (
          <Button
            key={`${index}-${type}`}
            dataHook={`richtextarea-button-${type.toLowerCase()}`}
            onClick={onClick}
            isActive={isActive()}
            tooltipText={tooltipText}
          >
            <Icon />
          </Button>
        );
      })}
    </div>
  );
};

export default RichTextToolbar;
