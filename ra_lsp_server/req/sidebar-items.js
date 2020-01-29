initSidebarItems({"enum":[["AnalyzerStatus",""],["ApplyWorkspaceEdit","The workspace/applyEdit request is sent from the server to the client to modify resource on the client side."],["CallHierarchyIncomingCalls",""],["CallHierarchyOutgoingCalls",""],["CallHierarchyPrepare",""],["Cancel","The base protocol now offers support for request cancellation. To cancel a request, a notification message with the following properties is sent:"],["CodeActionRequest","The code action request is sent from the client to the server to compute commands for a given text document and range. The request is triggered when the user moves the cursor into a problem marker in the editor or presses the lightbulb associated with a marker."],["CodeLensRequest","The code lens request is sent from the client to the server to compute code lenses for a given text document."],["CodeLensResolve","The code lens resolve request is sent from the client to the server to resolve the command for a given code lens item."],["CollectGarbage",""],["ColorPresentationRequest","The color presentation request is sent from the client to the server to obtain a list of presentations for a color value at a given location."],["Completion","The Completion request is sent from the client to the server to compute completion items at a given cursor position. Completion items are presented in the IntelliSense user interface. If computing full completion items is expensive, servers can additionally provide a handler for the completion item resolve request ('completionItem/resolve'). This request is sent when a completion item is selected in the user interface. A typical use case is for example: the 'textDocument/completion' request doesn’t fill in the documentation property for returned completion items since it is expensive to compute. When the item is selected in the user interface then a ‘completionItem/resolve’ request is sent with the selected completion item as a param. The returned completion item should have the documentation property filled in. The request can delay the computation of the detail and documentation properties. However, properties that are needed for the initial sorting and filtering, like sortText, filterText, insertText, and textEdit must be provided in the textDocument/completion request and must not be changed during resolve."],["CompletionResponse",""],["DecorationsRequest",""],["DiagnosticTag","The diagnostic tags."],["DidChangeConfiguration","A notification sent from the client to the server to signal the change of configuration settings."],["DidChangeTextDocument","The document change notification is sent from the client to the server to signal changes to a text document. In 2.0 the shape of the params has changed to include proper version numbers and language ids."],["DidChangeWatchedFiles","The watched files notification is sent from the client to the server when the client detects changes to files watched by the language client."],["DidChangeWorkspaceFolders","The workspace/didChangeWorkspaceFolders notification is sent from the client to the server to inform the server about workspace folder configuration changes"],["DidCloseTextDocument","The document close notification is sent from the client to the server when the document got closed in the client. The document's truth now exists where the document's uri points to (e.g. if the document's uri is a file uri the truth now exists on disk)."],["DidOpenTextDocument","The document open notification is sent from the client to the server to signal newly opened text documents. The document's truth is now managed by the client and the server must not try to read the document's truth using the document's uri."],["DidSaveTextDocument","The document save notification is sent from the client to the server when the document was saved in the client."],["DocumentColor","The document color request is sent from the client to the server to list all color references found in a given text document. Along with the range, a color value in RGB is returned."],["DocumentHighlightRequest","The document highlight request is sent from the client to the server to resolve a document highlights for a given text document position. For programming languages this usually highlights all references to the symbol scoped to this file. However we kept 'textDocument/documentHighlight' and 'textDocument/references' separate requests since the first one is allowed to be more fuzzy. Symbol matches usually have a DocumentHighlightKind of Read or Write whereas fuzzy or textual matches use Text as the kind."],["DocumentLinkRequest","The document links request is sent from the client to the server to request the location of links in a document."],["DocumentLinkResolve","The document link resolve request is sent from the client to the server to resolve the target of a given document link."],["DocumentSymbolRequest","The document symbol request is sent from the client to the server to list all symbols found in a given text document."],["DocumentSymbolResponse",""],["ExecuteCommand","The workspace/executeCommand request is sent from the client to the server to trigger command execution on the server. In most cases the server creates a WorkspaceEdit structure and applies the changes to the workspace using the request workspace/applyEdit which is sent from the server to the client."],["Exit","A notification to ask the server to exit its process. The server should exit with success code 0 if the shutdown request has been received before; otherwise with error code 1."],["ExpandMacro",""],["FindMatchingBrace",""],["FoldingRangeRequest","The folding range request is sent from the client to the server to return all folding ranges found in a given text document."],["Formatting","The document formatting request is sent from the server to the client to format a whole document."],["GotoDeclaration",""],["GotoDefinition","The goto definition request is sent from the client to the server to resolve the definition location of a symbol at a given text document position."],["GotoDefinitionResponse","GotoDefinition response can be single location, or multiple Locations or a link."],["GotoImplementation","The goto implementation request is sent from the client to the server to resolve the implementation location of a symbol at a given text document position."],["GotoTypeDefinition","The goto type definition request is sent from the client to the server to resolve the type definition location of a symbol at a given text document position."],["HoverRequest","The hover request is sent from the client to the server to request hover information at a given text document position."],["Initialize","The initialize request is sent as the first request from the client to the server. If the server receives request or notification before the `initialize` request it should act as follows:"],["Initialized","The initialized notification is sent from the client to the server after the client received the result of the initialize request but before the client is sending any other request or notification to the server. The server can use the initialized notification for example to dynamically register capabilities."],["InlayHints",""],["InlayKind",""],["JoinLines",""],["LogMessage","The log message notification is sent from the server to the client to ask the client to log a particular message."],["MessageType",""],["OnEnter",""],["OnTypeFormatting","The document on type formatting request is sent from the client to the server to format parts of the document during typing."],["ParentModule",""],["PrepareRenameRequest","The prepare rename request is sent from the client to the server to setup and test the validity of a rename operation at a given location."],["Progress","The progress notification is sent from the server to the client to ask the client to indicate progress."],["ProgressParamsValue",""],["PublishDecorations",""],["PublishDiagnostics","Diagnostics notification are sent from the server to the client to signal results of validation runs."],["RangeFormatting","The document range formatting request is sent from the client to the server to format a given range in a document."],["References","The references request is sent from the client to the server to resolve project-wide references for the symbol denoted by the given text document position."],["RegisterCapability","The client/registerCapability request is sent from the server to the client to register for a new capability on the client side. Not all clients need to support dynamic capability registration. A client opts in via the ClientCapabilities.GenericCapability property."],["Rename","The rename request is sent from the client to the server to perform a workspace-wide rename of a symbol."],["ResolveCompletionItem","The request is sent from the client to the server to resolve additional information for a given completion item."],["Runnables",""],["SelectionRangeRequest","The selection range request is sent from the client to the server to return suggested selection ranges at given positions. A selection range is a range around the cursor position which the user might be interested in selecting."],["SemanticHighlighting","Diagnostics notification are sent from the server to the client to signal results of validation runs."],["ShowMessage","The show message notification is sent from a server to a client to ask the client to display a particular message in the user interface."],["ShowMessageRequest","The show message request is sent from a server to a client to ask the client to display a particular message in the user interface. In addition to the show message notification the request allows to pass actions and to wait for an answer from the client."],["Shutdown","The shutdown request is sent from the client to the server. It asks the server to shut down, but to not exit (otherwise the response might not be delivered correctly to the client). There is a separate exit notification that asks the server to exit."],["SignatureHelpRequest","The signature help request is sent from the client to the server to request signature information at a given cursor position."],["SymbolKind","A symbol kind."],["SyntaxTree",""],["TelemetryEvent","The telemetry notification is sent from the server to the client to ask the client to log a telemetry event."],["UnregisterCapability","The client/unregisterCapability request is sent from the server to the client to unregister a previously register capability."],["WillSaveTextDocument","The document will save notification is sent from the client to the server before the document is actually saved."],["WillSaveWaitUntil","The document will save request is sent from the client to the server before the document is actually saved. The request can return an array of TextEdits which will be applied to the text document before it is saved. Please note that clients might drop results if computing the text edits took too long or if a server constantly fails on this request. This is done to keep the save fast and reliable."],["WorkDoneProgressCreate","The `window/workDoneProgress/create` request is sent from the server to the clientto ask the client to create a work done progress."],["WorkspaceConfiguration","The workspace/configuration request is sent from the server to the client to fetch configuration settings from the client. The request can fetch several configuration settings in one roundtrip. The order of the returned configuration settings correspond to the order of the passed ConfigurationItems (e.g. the first item in the response is the result for the first configuration item in the params)."],["WorkspaceFoldersRequest","The workspace/workspaceFolders request is sent from the server to the client to fetch the current open list of workspace folders. Returns null in the response if only a single file is open in the tool. Returns an empty array if a workspace is open but no folders are configured."],["WorkspaceSymbol","The workspace symbol request is sent from the client to the server to list project-wide symbols matching the query string."]],"struct":[["ApplyWorkspaceEditParams",""],["CodeActionParams","Params for the CodeActionRequest"],["CodeLens","A code lens represents a command that should be shown along with source text, like the number of references, a way to run tests, etc."],["CodeLensParams",""],["CompletionParams",""],["Decoration",""],["DidChangeConfigurationParams",""],["DidChangeWatchedFilesParams",""],["DidChangeWatchedFilesRegistrationOptions","Describe options to be used when registered for text document change events."],["DocumentOnTypeFormattingParams",""],["DocumentSymbolParams",""],["ExpandMacroParams",""],["ExpandedMacro",""],["FileSystemWatcher",""],["FindMatchingBraceParams",""],["Hover","The result of a hover request."],["InitializeResult",""],["InlayHint",""],["InlayHintsParams",""],["JoinLinesParams",""],["PartialResultParams","A parameter literal used to pass a partial result token."],["ProgressParams","The progress notification is sent from the server to the client to ask the client to indicate progress."],["PublishDecorationsParams",""],["PublishDiagnosticsParams",""],["ReferenceParams",""],["Registration","General parameters to to register for a capability."],["RegistrationParams",""],["Runnable",""],["RunnablesParams",""],["SelectionRange","Represents a selection range."],["SelectionRangeParams","A parameter literal used in selection range requests."],["ServerCapabilities",""],["ShowMessageParams",""],["SignatureHelp","Signature help represents the signature of something callable. There can be multiple signature but only one active and only one active parameter."],["SourceChange",""],["SyntaxTreeParams",""],["TextDocumentEdit","Describes textual changes on a single text document. The text document is referred to as a `VersionedTextDocumentIdentifier` to allow clients to check the text document version before an edit is applied. A `TextDocumentEdit` describes all changes on a version Si and after they are applied move the document to version Si+1. So the creator of a `TextDocumentEdit` doesn't need to sort the array or do any kind of ordering. However the edits must be non overlapping."],["TextDocumentPositionParams","A parameter literal used in requests to pass a text document and a position inside that document."],["TextEdit","A textual edit applicable to a text document."],["WorkDoneProgressParams","An optional token that a server can use to report work done progress"],["WorkspaceEdit","A workspace edit represents changes to many resources managed in the workspace."],["WorkspaceSymbolParams","The parameters of a Workspace Symbol Request."]],"trait":[["Notification",""],["Request",""]],"type":[["GotoImplementationResponse",""],["GotoTypeDefinitionResponse",""],["ProgressToken",""]]});