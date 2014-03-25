/** @constructor */
ScalaJS.c.scala_xml_Xhtml$ = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.minimizableElements$1 = null
});
ScalaJS.c.scala_xml_Xhtml$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Xhtml$.prototype.constructor = ScalaJS.c.scala_xml_Xhtml$;
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_Node__T = (function(node) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(node$1) {
    return (function(sb) {
      var x$2 = node$1;
      var x$3 = sb;
      var x$4 = ScalaJS.modules.scala_xml_Xhtml().toXhtml$default$2__Lscala_xml_NamespaceBinding();
      var x$5 = ScalaJS.modules.scala_xml_Xhtml().toXhtml$default$4__Z();
      var x$6 = ScalaJS.modules.scala_xml_Xhtml().toXhtml$default$5__Z();
      var x$7 = ScalaJS.modules.scala_xml_Xhtml().toXhtml$default$6__Z();
      var x$8 = ScalaJS.modules.scala_xml_Xhtml().toXhtml$default$7__Z();
      ScalaJS.modules.scala_xml_Xhtml().toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(x$2, x$4, x$3, x$5, x$6, x$7, x$8);
      return ScalaJS.bV(undefined)
    })
  })(node)))
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_NodeSeq__T = (function(nodeSeq) {
  return ScalaJS.modules.scala_xml_Utility().sbToString__Lscala_Function1__T(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(nodeSeq$1) {
    return (function(sb) {
      var x$9 = nodeSeq$1;
      var x$10 = sb;
      var x$11 = ScalaJS.modules.scala_xml_Xhtml().sequenceToXML$default$2__Lscala_xml_NamespaceBinding();
      var x$12 = ScalaJS.modules.scala_xml_Xhtml().sequenceToXML$default$4__Z();
      var x$13 = ScalaJS.modules.scala_xml_Xhtml().sequenceToXML$default$5__Z();
      var x$14 = ScalaJS.modules.scala_xml_Xhtml().sequenceToXML$default$6__Z();
      var x$15 = ScalaJS.modules.scala_xml_Xhtml().sequenceToXML$default$7__Z();
      ScalaJS.modules.scala_xml_Xhtml().sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(x$9, x$11, x$10, x$12, x$13, x$14, x$15);
      return ScalaJS.bV(undefined)
    })
  })(nodeSeq)))
});
ScalaJS.c.scala_xml_Xhtml$.prototype.minimizableElements__p1__Lscala_collection_immutable_List = (function() {
  return this.minimizableElements$1
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V = (function(x, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  var x1 = x;
  matchEnd7: {
    if (ScalaJS.is.scala_xml_Comment(x1)) {
      var x2 = ScalaJS.as.scala_xml_Comment(x1);
      if ((!stripComments)) {
        x2.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd7
      } else {
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd7
      }
    };
    if (ScalaJS.is.scala_xml_EntityRef(x1)) {
      var x3 = ScalaJS.as.scala_xml_EntityRef(x1);
      if (decodeEntities) {
        this.decode$1__p1__Lscala_xml_EntityRef__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(x3, sb);
        ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
        break matchEnd7
      }
    };
    if (ScalaJS.is.scala_xml_SpecialNode(x1)) {
      var x4 = ScalaJS.as.scala_xml_SpecialNode(x1);
      x4.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    if (ScalaJS.is.scala_xml_Group(x1)) {
      var x5 = ScalaJS.as.scala_xml_Group(x1);
      x5.nodes__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(x$16, sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1) {
        return (function(x$1) {
          ScalaJS.modules.scala_xml_Xhtml().toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(x$1, x$16.scope__Lscala_xml_NamespaceBinding(), sb$1, stripComments$1, decodeEntities$1, preserveWhitespace$1, minimizeTags$1);
          return ScalaJS.bV(undefined)
        })
      })(x, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    };
    sb.append__C__Lscala_collection_mutable_StringBuilder(60);
    x.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
    if ((x.attributes__Lscala_xml_MetaData() !== null)) {
      x.attributes__Lscala_xml_MetaData().buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb)
    } else {
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
    };
    x.scope__Lscala_xml_NamespaceBinding().buildString__Lscala_collection_mutable_StringBuilder__Lscala_xml_NamespaceBinding__V(sb, pscope);
    if (this.shortForm$1__p1__Lscala_xml_Node__Z__Z(x, minimizeTags)) {
      sb.append__T__Lscala_collection_mutable_StringBuilder(" />");
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    } else {
      sb.append__C__Lscala_collection_mutable_StringBuilder(62);
      this.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(x.child__Lscala_collection_Seq(), x.scope__Lscala_xml_NamespaceBinding(), sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags);
      sb.append__T__Lscala_collection_mutable_StringBuilder("</");
      x.nameToString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb);
      sb.append__C__Lscala_collection_mutable_StringBuilder(62);
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd7
    }
  }
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$3__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$5__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$6__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml$default$7__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V = (function(children, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  if (children.isEmpty__Z()) {
    return undefined
  };
  var doSpaces = children.forall__Lscala_Function1__Z(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function() {
    return (function(x) {
      return ScalaJS.bZ(ScalaJS.modules.scala_xml_Utility().isAtomAndNotText__Lscala_xml_Node__Z(x))
    })
  })()));
  ScalaJS.as.scala_collection_IterableLike(children.take__I__O((children.length__I() - 1))).foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(pscope$1, sb$2, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2, doSpaces$1) {
    return (function(c) {
      ScalaJS.modules.scala_xml_Xhtml().toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(c, pscope$1, sb$2, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2);
      if (doSpaces$1) {
        return sb$2.append__C__Lscala_collection_mutable_StringBuilder(32)
      } else {
        return ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit()
      }
    })
  })(pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags, doSpaces)));
  this.toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(ScalaJS.as.scala_xml_Node(children.last__O()), pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags)
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$2__Lscala_xml_NamespaceBinding = (function() {
  return ScalaJS.modules.scala_xml_TopScope()
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$3__Lscala_collection_mutable_StringBuilder = (function() {
  return new ScalaJS.c.scala_collection_mutable_StringBuilder().init___()
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$4__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$5__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$6__Z = (function() {
  return false
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML$default$7__Z = (function() {
  return true
});
ScalaJS.c.scala_xml_Xhtml$.prototype.decode$1__p1__Lscala_xml_EntityRef__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder = (function(er, sb$1) {
  var x1 = ScalaJS.modules.scala_xml_parsing_XhtmlEntities().entMap__Lscala_collection_immutable_Map().get__O__Lscala_Option(er.entityName__T());
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var chr = ScalaJS.uC(x2.x__O());
    if ((chr >= 128)) {
      return sb$1.append__C__Lscala_collection_mutable_StringBuilder(chr)
    }
  };
  return er.buildString__Lscala_collection_mutable_StringBuilder__Lscala_collection_mutable_StringBuilder(sb$1)
});
ScalaJS.c.scala_xml_Xhtml$.prototype.shortForm$1__p1__Lscala_xml_Node__Z__Z = (function(x$16, minimizeTags$1) {
  return ((minimizeTags$1 && (ScalaJS.anyRefEqEq(x$16.child__Lscala_collection_Seq(), null) || (x$16.child__Lscala_collection_Seq().length__I() === 0))) && this.minimizableElements__p1__Lscala_collection_immutable_List().contains__O__Z(x$16.label__T()))
});
ScalaJS.c.scala_xml_Xhtml$.prototype.init___ = (function() {
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.moduleInstances.scala_xml_Xhtml = this;
  this.minimizableElements$1 = ScalaJS.modules.scala_collection_immutable_List().apply__Lscala_collection_Seq__Lscala_collection_immutable_List(ScalaJS.modules.scala_Predef().wrapRefArray__AO__Lscala_collection_mutable_WrappedArray(ScalaJS.asArrayOf.java_lang_Object(ScalaJS.makeNativeArrayWrapper(ScalaJS.data.java_lang_String.getArrayOf(), ["base", "meta", "link", "hr", "br", "param", "img", "area", "input", "col"]), 1)));
  return this
});
ScalaJS.c.scala_xml_Xhtml$.prototype.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__ = (function(children, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags) {
  return ScalaJS.bV(this.sequenceToXML__Lscala_collection_Seq__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(children, pscope, sb, stripComments, decodeEntities, preserveWhitespace, minimizeTags))
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__ = (function(x, pscope$2, sb$2, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2) {
  return ScalaJS.bV(this.toXhtml__Lscala_xml_Node__Lscala_xml_NamespaceBinding__Lscala_collection_mutable_StringBuilder__Z__Z__Z__Z__V(x, pscope$2, sb$2, stripComments$2, decodeEntities$2, preserveWhitespace$2, minimizeTags$2))
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_NodeSeq__ = (function(nodeSeq) {
  return this.toXhtml__Lscala_xml_NodeSeq__T(nodeSeq)
});
ScalaJS.c.scala_xml_Xhtml$.prototype.toXhtml__Lscala_xml_Node__ = (function(node) {
  return this.toXhtml__Lscala_xml_Node__T(node)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Xhtml$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Xhtml$.prototype = ScalaJS.c.scala_xml_Xhtml$.prototype;
ScalaJS.is.scala_xml_Xhtml$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Xhtml$)))
});
ScalaJS.as.scala_xml_Xhtml$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Xhtml$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Xhtml")
  }
});
ScalaJS.isArrayOf.scala_xml_Xhtml$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Xhtml$)))
});
ScalaJS.asArrayOf.scala_xml_Xhtml$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Xhtml$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Xhtml;", depth)
  }
});
ScalaJS.data.scala_xml_Xhtml$ = new ScalaJS.ClassTypeData({
  scala_xml_Xhtml$: 0
}, false, "scala.xml.Xhtml$", ScalaJS.data.java_lang_Object, {
  scala_xml_Xhtml$: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Xhtml$.prototype.$classData = ScalaJS.data.scala_xml_Xhtml$;
ScalaJS.moduleInstances.scala_xml_Xhtml = undefined;
ScalaJS.modules.scala_xml_Xhtml = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Xhtml)) {
    ScalaJS.moduleInstances.scala_xml_Xhtml = new ScalaJS.c.scala_xml_Xhtml$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Xhtml
});
//@ sourceMappingURL=Xhtml$.js.map
