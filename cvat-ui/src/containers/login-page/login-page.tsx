// Copyright (C) 2021 Intel Corporation
//
// SPDX-License-Identifier: MIT

import { connect } from 'react-redux';
import LoginPageComponent from 'components/login-page/login-page';
import { CombinedState } from 'reducers/interfaces';
// import { loginAsync } from 'actions/auth-actions';
import { googleOAuth2 } from 'actions/google-actions';
import { loginwithsaga } from '../../actions/index';

interface StateToProps {
    fetching: boolean;
    renderResetPassword: boolean;
    access_token: string | null;
}

interface DispatchToProps {
    onLogin: typeof loginwithsaga;
    onGooglelogin: typeof googleOAuth2;
}

function mapStateToProps(state: CombinedState): StateToProps {
    return {
        fetching: state.auth.fetching,
        renderResetPassword: state.auth.allowResetPassword,
        access_token: state.googleAuth.Data_list,
    };
}

const mapDispatchToProps: DispatchToProps = {
    onLogin: loginwithsaga,
    onGooglelogin: googleOAuth2,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
