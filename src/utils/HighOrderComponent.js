import React, { useEffect, useCallback, Fragment } from 'react';
import hoistStatics from 'hoist-non-react-statics';
import { isEmpty } from 'lodash';
import {translationsActions} from '../reducers/translations';
import { useDispatch, useSelector } from 'react-redux';
import { getTranslationFile } from './utilFunctions';

 // A public higher-order component to access translations
let initStart = true;
const withTranslations = (SourceComponent, ComponentName = 'Component') => {
  function TranslatableComponent(props) {
    const dispatch = useDispatch();
    const { translations } = useSelector((state) => state.translationsReducer);
    const translationImportHandler = useCallback(async () => {
      const fileName = getTranslationFile();
      await import(`../constants/translations/${fileName}`).then(
        ({ translation }) => {
          dispatch(translationsActions.setTranslations(translation));
        }
      );
    }, [dispatch]);

    useEffect(() => {
      if (initStart) {
        initStart = false;
        isEmpty(translations) && translationImportHandler();
        return;
      }
    }, [translationImportHandler, translations]);

    // if (!translations?.Global) return <Fragment></Fragment>;

    return (
      <SourceComponent
        t={translations[ComponentName]}
        {...props}
      />
    );
  }

  TranslatableComponent.displayName = `withTranslations(${ComponentName})`;
  return hoistStatics(TranslatableComponent, SourceComponent);
};

export default withTranslations;
