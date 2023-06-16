import '@vue/runtime-core'

import * as Components from './imports'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        FloatButton: typeof Components.FloatButton
        IconButton: typeof Components.IconButton
        SegmentedButton: typeof Components.SegmentedButton
        TheButton: typeof Components.TheButton
        TheCard: typeof Components.TheCard
        ChipBook: typeof Components.ChipBook
        LabelChip: typeof Components.LabelChip
        TheCollapse: typeof Components.TheCollapse
        TheDialog: typeof Components.TheDialog
        TheDrawerCard: typeof Components.TheDrawerCard
        FragmentBook: typeof Components.FragmentBook
        TheFragment: typeof Components.TheFragment
        TextInput: typeof Components.TextInput
        Navigation: typeof Components.Navigation
        NavigationItem: typeof Components.NavigationItem
        ListState: typeof Components.ListState
        TransitionCollapse: typeof Components.TransitionCollapse
        TransitionFade: typeof Components.TransitionFade
        TransitionModal: typeof Components.TransitionModal
    }
}

export {}
