/** @constructor */
ScalaJS.c.scala_xml_parsing_MarkupHandler = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.isValidating$1 = false;
  this.decls$1 = null;
  this.ent$1 = null
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.constructor = ScalaJS.c.scala_xml_parsing_MarkupHandler;
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.log__T__V = (function(msg) {
  ScalaJS.impls.scala_util_logging_Logged$class__log__Lscala_util_logging_Logged__T__V(this, msg)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.isValidating__Z = (function() {
  return this.isValidating$1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.decls__Lscala_collection_immutable_List = (function() {
  return this.decls$1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.decls$und$eq__Lscala_collection_immutable_List__V = (function(x$1) {
  this.decls$1 = x$1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.ent__Lscala_collection_mutable_Map = (function() {
  return this.ent$1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.ent$und$eq__Lscala_collection_mutable_Map__V = (function(x$1) {
  this.ent$1 = x$1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.lookupElemDecl__T__Lscala_xml_dtd_ElemDecl = (function(Label) {
  var nonLocalReturnKey1 = new ScalaJS.c.java_lang_Object().init___();
  try {
    this.decls__Lscala_collection_immutable_List().withFilter__Lscala_Function1__Lscala_collection_generic_FilterMonadic(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(Label$1) {
      return (function(check$ifrefutable$1) {
        var x1 = check$ifrefutable$1;
        matchEnd7: {
          if (ScalaJS.is.scala_xml_dtd_ElemDecl(x1)) {
            var x4 = ScalaJS.as.scala_xml_dtd_ElemDecl(x1);
            var p2 = x4.name__T();
            if (ScalaJS.anyRefEqEq(Label$1, p2)) {
              var jsx$1 = true;
              break matchEnd7
            }
          };
          var jsx$1 = false;
          break matchEnd7
        };
        return ScalaJS.bZ(jsx$1)
      })
    })(Label))).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(Label$1, nonLocalReturnKey1$1) {
      return (function(x$1) {
        var x1 = x$1;
        if (ScalaJS.is.scala_xml_dtd_ElemDecl(x1)) {
          var x4 = ScalaJS.as.scala_xml_dtd_ElemDecl(x1);
          var p2 = x4.name__T();
          if (ScalaJS.anyRefEqEq(Label$1, p2)) {
            throw new ScalaJS.c.scala_runtime_NonLocalReturnControl().init___O__O(nonLocalReturnKey1$1, x4)
          }
        };
        throw new ScalaJS.c.scala_MatchError().init___O(x1)
      })
    })(Label, nonLocalReturnKey1)));
    return null
  } catch ($jsexc$) {
    if (ScalaJS.is.scala_runtime_NonLocalReturnControl($jsexc$)) {
      var ex = $jsexc$;
      if ((ex.key__O() === nonLocalReturnKey1)) {
        return ScalaJS.as.scala_xml_dtd_ElemDecl(ex.value__O())
      } else {
        throw ex
      }
    } else {
      throw $jsexc$
    }
  }
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.replacementText__T__Lscala_io_Source = (function(entityName) {
  var jsx$3 = ScalaJS.modules.scala_io_Source();
  var rc18 = false;
  var x3 = null;
  var x1 = this.ent__Lscala_collection_mutable_Map().get__O__Lscala_Option(entityName);
  matchEnd19: {
    if (ScalaJS.is.scala_Some(x1)) {
      rc18 = true;
      x3 = ScalaJS.as.scala_Some(x1);
      var p2 = ScalaJS.as.scala_xml_dtd_EntityDecl(x3.x__O());
      if (ScalaJS.is.scala_xml_dtd_ParsedEntityDecl(p2)) {
        var x6 = ScalaJS.as.scala_xml_dtd_ParsedEntityDecl(p2);
        var p5 = x6.entdef__Lscala_xml_dtd_EntityDef();
        if (ScalaJS.is.scala_xml_dtd_IntDef(p5)) {
          var x7 = ScalaJS.as.scala_xml_dtd_IntDef(p5);
          var value = x7.value__T();
          var jsx$2 = value;
          break matchEnd19
        }
      }
    };
    if (rc18) {
      var p8 = ScalaJS.as.scala_xml_dtd_EntityDecl(x3.x__O());
      if (ScalaJS.is.scala_xml_dtd_ParameterEntityDecl(p8)) {
        var x12 = ScalaJS.as.scala_xml_dtd_ParameterEntityDecl(p8);
        var p11 = x12.entdef__Lscala_xml_dtd_EntityDef();
        if (ScalaJS.is.scala_xml_dtd_IntDef(p11)) {
          var x13 = ScalaJS.as.scala_xml_dtd_IntDef(p11);
          var value$2 = x13.value__T();
          var jsx$2 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T(" %s ")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [value$2])));
          break matchEnd19
        }
      }
    };
    if (rc18) {
      var jsx$2 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<!-- %s; -->")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [entityName])));
      break matchEnd19
    };
    if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
      var jsx$2 = new ScalaJS.c.scala_collection_immutable_StringOps().init___T(ScalaJS.modules.scala_Predef().augmentString__T__T("<!-- unknown entity %s; -->")).format__Lscala_collection_Seq__T(ScalaJS.modules.scala_Predef().genericWrapArray__O__Lscala_collection_mutable_WrappedArray(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_Object.getArrayOf(), [entityName])));
      break matchEnd19
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  };
  return jsx$3.fromString__T__Lscala_io_Source(jsx$2)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.endDTD__T__V = (function(n) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V = (function(pos, pre, label, attrs, scope) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemEnd__I__T__T__V = (function(pos, pre, label) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemDecl__T__T__V = (function(n, cmstr) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.attListDecl__T__Lscala_collection_immutable_List__V = (function(name, attList) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.someEntityDecl__p1__T__Lscala_xml_dtd_EntityDef__Lscala_Function2__V = (function(name, edef, f) {
  var x1 = edef;
  matchEnd4: {
    if (ScalaJS.is.scala_xml_dtd_ExtDef(x1)) {
      if ((!this.isValidating__Z())) {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd4
      }
    };
    var y = ScalaJS.as.scala_xml_dtd_EntityDecl(f.apply__O__O__O(name, edef));
    this.decls$und$eq__Lscala_collection_immutable_List__V(this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(y));
    this.ent__Lscala_collection_mutable_Map().update__O__O__V(name, y);
    ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
    break matchEnd4
  }
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.parameterEntityDecl__T__Lscala_xml_dtd_EntityDef__V = (function(name, edef) {
  this.someEntityDecl__p1__T__Lscala_xml_dtd_EntityDef__Lscala_Function2__V(name, edef, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(name, entdef) {
      return new ScalaJS.c.scala_xml_dtd_ParameterEntityDecl().init___T__Lscala_xml_dtd_EntityDef(name, entdef)
    })
  })()))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.parsedEntityDecl__T__Lscala_xml_dtd_EntityDef__V = (function(name, edef) {
  this.someEntityDecl__p1__T__Lscala_xml_dtd_EntityDef__Lscala_Function2__V(name, edef, new ScalaJS.c.scala_scalajs_runtime_AnonFunction2().init___Lscala_scalajs_js_Function2((function() {
    return (function(name, entdef) {
      return new ScalaJS.c.scala_xml_dtd_ParsedEntityDecl().init___T__Lscala_xml_dtd_EntityDef(name, entdef)
    })
  })()))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.peReference__T__V = (function(name) {
  this.decls$und$eq__Lscala_collection_immutable_List__V(this.decls__Lscala_collection_immutable_List().$$colon$colon__O__Lscala_collection_immutable_List(new ScalaJS.c.scala_xml_dtd_PEReference().init___T(name)))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.unparsedEntityDecl__T__Lscala_xml_dtd_ExternalID__T__V = (function(name, extID, notat) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.notationDecl__T__Lscala_xml_dtd_ExternalID__V = (function(notat, extID) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_util_logging_Logged$class__$init$__Lscala_util_logging_Logged__V(this);
  this.isValidating$1 = false;
  this.decls$1 = ScalaJS.modules.scala_collection_immutable_Nil();
  this.ent$1 = new ScalaJS.c.scala_collection_mutable_HashMap().init___();
  return this
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.log__T__ = (function(msg) {
  return ScalaJS.bV(this.log__T__V(msg))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.notationDecl__T__Lscala_xml_dtd_ExternalID__ = (function(notat, extID) {
  return ScalaJS.bV(this.notationDecl__T__Lscala_xml_dtd_ExternalID__V(notat, extID))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.unparsedEntityDecl__T__Lscala_xml_dtd_ExternalID__T__ = (function(name, extID$2, notat$2) {
  return ScalaJS.bV(this.unparsedEntityDecl__T__Lscala_xml_dtd_ExternalID__T__V(name, extID$2, notat$2))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.peReference__T__ = (function(name$2) {
  return ScalaJS.bV(this.peReference__T__V(name$2))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.parsedEntityDecl__T__Lscala_xml_dtd_EntityDef__ = (function(name$3, edef) {
  return ScalaJS.bV(this.parsedEntityDecl__T__Lscala_xml_dtd_EntityDef__V(name$3, edef))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.parameterEntityDecl__T__Lscala_xml_dtd_EntityDef__ = (function(name$4, edef$2) {
  return ScalaJS.bV(this.parameterEntityDecl__T__Lscala_xml_dtd_EntityDef__V(name$4, edef$2))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.attListDecl__T__Lscala_collection_immutable_List__ = (function(name$5, attList) {
  return ScalaJS.bV(this.attListDecl__T__Lscala_collection_immutable_List__V(name$5, attList))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemDecl__T__T__ = (function(n, cmstr) {
  return ScalaJS.bV(this.elemDecl__T__T__V(n, cmstr))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemEnd__I__T__T__ = (function(pos, pre, label) {
  return ScalaJS.bV(this.elemEnd__I__T__T__V(pos, pre, label))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(pos$2, pre$2, label$2, attrs, scope) {
  return ScalaJS.bV(this.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V(pos$2, pre$2, label$2, attrs, scope))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.endDTD__T__ = (function(n$2) {
  return ScalaJS.bV(this.endDTD__T__V(n$2))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.replacementText__T__ = (function(entityName) {
  return this.replacementText__T__Lscala_io_Source(entityName)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.lookupElemDecl__T__ = (function(Label) {
  return this.lookupElemDecl__T__Lscala_xml_dtd_ElemDecl(Label)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.ent$und$eq__Lscala_collection_mutable_Map__ = (function(x$1) {
  return ScalaJS.bV(this.ent$und$eq__Lscala_collection_mutable_Map__V(x$1))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.ent__ = (function() {
  return this.ent__Lscala_collection_mutable_Map()
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.decls$und$eq__Lscala_collection_immutable_List__ = (function(x$1$2) {
  return ScalaJS.bV(this.decls$und$eq__Lscala_collection_immutable_List__V(x$1$2))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.decls__ = (function() {
  return this.decls__Lscala_collection_immutable_List()
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.isValidating__ = (function() {
  return ScalaJS.bZ(this.isValidating__Z())
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.reportSyntaxError__I__T__ = (function(pos$3, str) {
  return ScalaJS.bV(this.reportSyntaxError__I__T__V(pos$3, str))
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.text__I__T__ = (function(pos$4, txt) {
  return this.text__I__T__Lscala_xml_NodeSeq(pos$4, txt)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.entityRef__I__T__ = (function(pos$5, n$3) {
  return this.entityRef__I__T__Lscala_xml_NodeSeq(pos$5, n$3)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.comment__I__T__ = (function(pos$6, comment) {
  return this.comment__I__T__Lscala_xml_NodeSeq(pos$6, comment)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.procInstr__I__T__T__ = (function(pos$7, target, txt$2) {
  return this.procInstr__I__T__T__Lscala_xml_NodeSeq(pos$7, target, txt$2)
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__ = (function(pos$8, pre$3, label$3, attrs$2, scope$2, empty, args) {
  return this.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq(pos$8, pre$3, label$3, attrs$2, scope$2, empty, args)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_parsing_MarkupHandler = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_parsing_MarkupHandler.prototype = ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype;
ScalaJS.is.scala_xml_parsing_MarkupHandler = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_parsing_MarkupHandler)))
});
ScalaJS.as.scala_xml_parsing_MarkupHandler = (function(obj) {
  if ((ScalaJS.is.scala_xml_parsing_MarkupHandler(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.parsing.MarkupHandler")
  }
});
ScalaJS.isArrayOf.scala_xml_parsing_MarkupHandler = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_parsing_MarkupHandler)))
});
ScalaJS.asArrayOf.scala_xml_parsing_MarkupHandler = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_parsing_MarkupHandler(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.parsing.MarkupHandler;", depth)
  }
});
ScalaJS.data.scala_xml_parsing_MarkupHandler = new ScalaJS.ClassTypeData({
  scala_xml_parsing_MarkupHandler: 0
}, false, "scala.xml.parsing.MarkupHandler", ScalaJS.data.java_lang_Object, {
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_parsing_MarkupHandler.prototype.$classData = ScalaJS.data.scala_xml_parsing_MarkupHandler;
//@ sourceMappingURL=MarkupHandler.js.map
