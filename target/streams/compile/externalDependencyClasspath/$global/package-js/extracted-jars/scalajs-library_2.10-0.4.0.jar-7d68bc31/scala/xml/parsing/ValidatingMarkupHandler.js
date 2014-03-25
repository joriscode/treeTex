/** @constructor */
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler = (function() {
  ScalaJS.c.scala_xml_parsing_MarkupHandler.call(this);
  this.rootLabel$2 = null;
  this.qStack$2 = null;
  this.qCurrent$2 = 0;
  this.declStack$2 = null;
  this.declCurrent$2 = null;
  this.isValidating$2 = false
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype = new ScalaJS.inheritable.scala_xml_parsing_MarkupHandler();
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.constructor = ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler;
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.rootLabel__T = (function() {
  return this.rootLabel$2
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.rootLabel$und$eq__T__V = (function(x$1) {
  this.rootLabel$2 = x$1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qStack__Lscala_collection_immutable_List = (function() {
  return this.qStack$2
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qStack$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.qStack$2 = x$1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qCurrent__I = (function() {
  return this.qCurrent$2
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qCurrent$und$eq__I__V = (function(x$1) {
  this.qCurrent$2 = x$1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declStack__Lscala_collection_immutable_List = (function() {
  return this.declStack$2
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declStack$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.declStack$2 = x$1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declCurrent__Lscala_xml_dtd_ElemDecl = (function() {
  return this.declCurrent$2
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declCurrent$und$eq__Lscala_xml_dtd_ElemDecl__V = (function(x$1) {
  this.declCurrent$2 = x$1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.isValidating__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.log__T__V = (function(msg) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.endDTD__T__V = (function(n) {
  this.rootLabel$und$eq__T__V(n)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V = (function(pos, pre, label, attrs, scope) {
  this.log__T__V((((("[qCurrent = " + ScalaJS.bI(this.qCurrent__I())) + " visiting ") + label) + "]"));
  if ((this.qCurrent__I() === -1)) {
    this.log__T__V("  checking root");
    if ((!ScalaJS.anyRefEqEq(label, this.rootLabel__T()))) {
      this.reportValidationError__I__T__V(pos, ("this element should be " + this.rootLabel__T()))
    }
  } else {
    this.log__T__V("  checking node");
    var x1 = this.declCurrent__Lscala_xml_dtd_ElemDecl().contentModel__Lscala_xml_dtd_ContentModel();
    matchEnd8: {
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_ANY(), x1)) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_EMPTY(), x1)) {
        this.reportValidationError__I__T__V(pos, "DTD says, no elems, no text allowed here");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_xml_dtd_PCDATA(), x1)) {
        this.reportValidationError__I__T__V(pos, "DTD says, no elements allowed here");
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.is.scala_xml_dtd_MIXED(x1)) {
        var x2 = ScalaJS.as.scala_xml_dtd_MIXED(x1);
        this.advanceDFA$1__p2__Lscala_xml_dtd_DFAContentModel__I__T__V(x2, pos, label);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      if (ScalaJS.is.scala_xml_dtd_ELEMENTS(x1)) {
        var x3 = ScalaJS.as.scala_xml_dtd_ELEMENTS(x1);
        this.advanceDFA$1__p2__Lscala_xml_dtd_DFAContentModel__I__T__V(x3, pos, label);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd8
      };
      throw new ScalaJS.c.scala_MatchError().init___O(x1)
    }
  };
  var x$1 = this.qCurrent__I();
  var jsx$1 = this.qStack__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(ScalaJS.bI(x$1));
  this.qStack$und$eq__Lscala_collection_immutable_List__V(jsx$1);
  var x$2 = this.declCurrent__Lscala_xml_dtd_ElemDecl();
  var jsx$2 = this.declStack__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$2);
  this.declStack$und$eq__Lscala_collection_immutable_List__V(jsx$2);
  this.declCurrent$und$eq__Lscala_xml_dtd_ElemDecl__V(this.lookupElemDecl__T__Lscala_xml_dtd_ElemDecl(label));
  this.qCurrent$und$eq__I__V(0);
  this.log__T__V("  done  now")
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.elemEnd__I__T__T__V = (function(pos, pre, label) {
  this.log__T__V("  elemEnd");
  this.qCurrent$und$eq__I__V(ScalaJS.uI(this.qStack__Lscala_collection_immutable_List().head__O()));
  this.qStack$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.qStack__Lscala_collection_immutable_List().tail__O()));
  this.declCurrent$und$eq__Lscala_xml_dtd_ElemDecl__V(ScalaJS.as.scala_xml_dtd_ElemDecl(this.declStack__Lscala_collection_immutable_List().head__O()));
  this.declStack$und$eq__Lscala_collection_immutable_List__V(ScalaJS.as.scala_collection_immutable_List(this.declStack__Lscala_collection_immutable_List().tail__O()));
  this.log__T__V(("    qCurrent now" + ScalaJS.bI(this.qCurrent__I())));
  this.log__T__V(("    declCurrent now" + this.declCurrent__Lscala_xml_dtd_ElemDecl()))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.elemDecl__T__T__V = (function(name, cmstr) {
  var x$3 = new ScalaJS.c.scala_xml_dtd_ElemDecl().init___T__Lscala_xml_dtd_ContentModel(name, ScalaJS.modules.scala_xml_dtd_ContentModel().parse__T__Lscala_xml_dtd_ContentModel(cmstr));
  var jsx$3 = this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$3);
  this.decls$und$eq__Lscala_collection_immutable_List__V(jsx$3)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.attListDecl__T__Lscala_collection_immutable_List__V = (function(name, attList) {
  var x$4 = new ScalaJS.c.scala_xml_dtd_AttListDecl().init___T__Lscala_collection_immutable_List(name, attList);
  var jsx$4 = this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$4);
  this.decls$und$eq__Lscala_collection_immutable_List__V(jsx$4)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.unparsedEntityDecl__T__Lscala_xml_dtd_ExternalID__T__V = (function(name, extID, notat) {
  var x$5 = new ScalaJS.c.scala_xml_dtd_UnparsedEntityDecl().init___T__Lscala_xml_dtd_ExternalID__T(name, extID, notat);
  var jsx$5 = this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$5);
  this.decls$und$eq__Lscala_collection_immutable_List__V(jsx$5)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.notationDecl__T__Lscala_xml_dtd_ExternalID__V = (function(notat, extID) {
  var x$6 = new ScalaJS.c.scala_xml_dtd_NotationDecl().init___T__Lscala_xml_dtd_ExternalID(notat, extID);
  var jsx$6 = this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$6);
  this.decls$und$eq__Lscala_collection_immutable_List__V(jsx$6)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.peReference__T__V = (function(name) {
  var x$7 = new ScalaJS.c.scala_xml_dtd_PEReference().init___T(name);
  var jsx$7 = this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(x$7);
  this.decls$und$eq__Lscala_collection_immutable_List__V(jsx$7)
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.advanceDFA$1__p2__Lscala_xml_dtd_DFAContentModel__I__T__V = (function(dm, pos$1, label$1) {
  var trans = dm.dfa__Lscala_util_automata_DetWordAutom().delta__ALscala_collection_mutable_Map().underlying[this.qCurrent__I()];
  this.log__T__V(("advanceDFA(dm): " + dm));
  this.log__T__V(("advanceDFA(trans): " + trans));
  var x1 = trans.get__O__Lscala_Option(new ScalaJS.c.scala_xml_dtd_ContentModel$ElemName().init___T(label$1));
  matchEnd4: {
    if (ScalaJS.is.scala_Some(x1)) {
      var x2 = ScalaJS.as.scala_Some(x1);
      var qNew = ScalaJS.uI(x2.x__O());
      this.qCurrent$und$eq__I__V(qNew);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd4
    };
    this.reportValidationError__I__T__V(pos$1, ("DTD says, wrong element, expected one of " + trans.keys__Lscala_collection_Iterable()));
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.init___ = (function() {
  ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.init___.call(this);
  this.qStack$2 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.qCurrent$2 = -1;
  this.declStack$2 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.declCurrent$2 = null;
  return this
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declCurrent$und$eq__Lscala_xml_dtd_ElemDecl__ = (function(x$1) {
  return ScalaJS.bV(this.declCurrent$und$eq__Lscala_xml_dtd_ElemDecl__V(x$1))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declCurrent__ = (function() {
  return this.declCurrent__Lscala_xml_dtd_ElemDecl()
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declStack$und$eq__Lscala_collection_immutable_List__ = (function(x$1$2) {
  return ScalaJS.bV(this.declStack$und$eq__Lscala_collection_immutable_List__V(x$1$2))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.declStack__ = (function() {
  return this.declStack__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qCurrent$und$eq__I__ = (function(x$1$3) {
  return ScalaJS.bV(this.qCurrent$und$eq__I__V(x$1$3))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qCurrent__ = (function() {
  return ScalaJS.bI(this.qCurrent__I())
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qStack$und$eq__Lscala_collection_immutable_List__ = (function(x$1$4) {
  return ScalaJS.bV(this.qStack$und$eq__Lscala_collection_immutable_List__V(x$1$4))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.qStack__ = (function() {
  return this.qStack__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.rootLabel$und$eq__T__ = (function(x$1$5) {
  return ScalaJS.bV(this.rootLabel$und$eq__T__V(x$1$5))
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.rootLabel__ = (function() {
  return this.rootLabel__T()
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.reportValidationError__I__T__ = (function(pos, str) {
  return ScalaJS.bV(this.reportValidationError__I__T__V(pos, str))
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_ValidatingMarkupHandler = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_ValidatingMarkupHandler.prototype = ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype;
ScalaJS.is.scala_xml_parsing_ValidatingMarkupHandler = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_ValidatingMarkupHandler)))
});
ScalaJS.as.scala_xml_parsing_ValidatingMarkupHandler = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_ValidatingMarkupHandler(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.ValidatingMarkupHandler")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_ValidatingMarkupHandler = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_ValidatingMarkupHandler)))
});
ScalaJS.asArrayOf.scala_xml_parsing_ValidatingMarkupHandler = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_ValidatingMarkupHandler(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.ValidatingMarkupHandler;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_ValidatingMarkupHandler = new ScalaJS.ClassTypeData({
  scala_xml_parsing_ValidatingMarkupHandler: 0
}, false, "scala.xml.parsing.ValidatingMarkupHandler", ScalaJS.data.scala_xml_parsing_MarkupHandler, {
  scala_xml_parsing_ValidatingMarkupHandler: 1,
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.$classData = ScalaJS.data.scala_xml_parsing_ValidatingMarkupHandler;
//@ sourceMappingURL=ValidatingMarkupHandler.js.map
