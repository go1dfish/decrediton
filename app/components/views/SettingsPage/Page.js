import KeyBlueButton from "../../KeyBlueButton";
import { FormattedMessage as T } from "react-intl";
import { TabbedHeader } from "shared";
import ChangePassphraseModal from "../../ChangePassphraseModal";
import Select from "react-select";
import "style/StakePool.less";
import "style/Settings.less";

const SettingsPage = ({
                        areSettingsDirty,
                        tempSettings,
                        networks,
                        currencies,
                        locales,
                        isShowingChangePassphrase,
                        onShowChangePassphrase,
                        onCancelChangePassphrase,
                        onAttemptChangePassphrase,
                        onChangeCurrencyDisplay,
                        onChangeNetwork,
                        onChangeLocale,
                        onSaveSettings,
                        routes,
                      }) => (
  <Aux>
    <TabbedHeader {...{ routes }}/>
    <ChangePassphraseModal
      hidden={!isShowingChangePassphrase}
      updatePassphrase={onAttemptChangePassphrase}
      cancelPassphrase={onCancelChangePassphrase}
    />
    <div className={isShowingChangePassphrase ? "page-content-blur" : "page-content"}>

      <div className="settings-row">
        <div className="settings-label">
          <T id="settings.locale" m="Locale" />
        </div>
        <div className="settings-input">

          <Select
            value={tempSettings.locale}
            onChange={(newLocale) => onChangeLocale(newLocale.key)}
            clearable={false}
            multi={false}
            valueKey="key" labelKey="description"
            options={locales}
          />
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-label">
          <T id="settings.displayedUnits" m="Displayed Units" />
        </div>
        <div className="settings-input">

          <Select
            value={tempSettings.currencyDisplay}
            onChange={(newCurrency) => onChangeCurrencyDisplay(newCurrency.name)}
            clearable={false}
            multi={false}
            valueKey="name" labelKey="name"
            options={currencies}
          />
        </div>
      </div>

      <div className="settings-row">
        <div className="settings-label">
          <T id="settings.network"
             m="Network" />
          <span className="settings-restart"> (
               <T id="settings.requiresRestart" m="requires restart" />
              )</span>
        </div>
        <div className="settings-input">

          <Select
            value={tempSettings.network}
            onChange={(newNet) => onChangeNetwork(newNet.name)}
            clearable={false}
            multi={false}
            valueKey="name" labelKey="name"
            options={networks}
          />
        </div>
      </div>
      <div className="settings-action-buttons">
        <div className="settings-save-button">
          <KeyBlueButton
            disabled={!areSettingsDirty}
            size="large"
            block={false}
            onClick={onSaveSettings}>
            <T id="settings.save" m="Save Settings" />
          </KeyBlueButton>
        </div>
        <div className="settings-update-passphrase-button">
          <KeyBlueButton
            onClick={onShowChangePassphrase}>
            <T id="settings.updatePrivatePassphrase" m="Update Private Passphrase" />
          </KeyBlueButton>
        </div>
      </div>
    </div>
  </Aux>
);

export default SettingsPage;
