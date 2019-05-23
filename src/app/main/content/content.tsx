import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './content.module.css';
import { ContentHeader } from './contentHeader/contentHeader';
import { MainContent } from './mainContent';
import { ContentFooter } from './contentFooter/contentFooter';
import { LetterType } from '../../types/types';

interface IProps {
  isAllChecked: boolean;
  selectAll: () => void;
  deleteLetters: () => void;
  letters: LetterType[];
  checkedLetterIds: { [id: string]: boolean };
  onCheckboxChange: (id: string) => void;
  searchText: string;
  isDark: boolean;
}

export class Content extends Component {
  public constructor(props: IProps) {
    super(props);
    this.props = props;
  }

  public readonly props: IProps;

  public render() {
    return (
      <div
        className={classNames(
          styles.content,
          this.props.isDark ? styles.content_darkTheme : styles.content_lightTheme
        )}
      >
        <ContentHeader
          isAllChecked={this.props.isAllChecked}
          selectAll={this.props.selectAll}
          deleteLetters={this.props.deleteLetters}
        />
        <MainContent
          letters={this.props.letters}
          checkedLetterIds={this.props.checkedLetterIds}
          onCheckboxChange={this.props.onCheckboxChange}
          searchText={this.props.searchText}
        />
        <ContentFooter />
      </div>
    );
  }
}
