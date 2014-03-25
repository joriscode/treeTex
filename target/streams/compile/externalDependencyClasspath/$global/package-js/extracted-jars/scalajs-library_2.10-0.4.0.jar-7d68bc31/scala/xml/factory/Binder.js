/** @constructor */
ScalaJS.c.scala_xml_factory_Binder = (function() {
  ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.call(this);
  this.preserveWS$3 = false;
  this.result$3 = null
});
ScalaJS.c.scala_xml_factory_Binder.prototype = new ScalaJS.inheritable.scala_xml_parsing_ValidatingMarkupHandler();
ScalaJS.c.scala_xml_factory_Binder.prototype.constructor = ScalaJS.c.scala_xml_factory_Binder;
ScalaJS.c.scala_xml_factory_Binder.prototype.preserveWS__Z = (function() {
  return this.preserveWS$3
});
ScalaJS.c.scala_xml_factory_Binder.prototype.result__Lscala_xml_NodeBuffer = (function() {
  return this.result$3
});
ScalaJS.c.scala_xml_factory_Binder.prototype.result$und$eq__Lscala_xml_NodeBuffer__V = (function(x$1) {
  this.result$3 = x$1
});
ScalaJS.c.scala_xml_factory_Binder.prototype.reportSyntaxError__I__T__V = (function(pos, str) {
  /*<skip>*/
});
ScalaJS.c.scala_xml_factory_Binder.prototype.procInstr__I__T__T__Lscala_xml_ProcInstr = (function(pos, target, txt) {
  return new ScalaJS.c.scala_xml_ProcInstr().init___T__T(target, txt)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.comment__I__T__Lscala_xml_Comment = (function(pos, txt) {
  return new ScalaJS.c.scala_xml_Comment().init___T(txt)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.entityRef__I__T__Lscala_xml_EntityRef = (function(pos, n) {
  return new ScalaJS.c.scala_xml_EntityRef().init___T(n)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.text__I__T__Lscala_xml_Text = (function(pos, txt) {
  return ScalaJS.modules.scala_xml_Text().apply__T__Lscala_xml_Text(txt)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.traverse__Lscala_xml_Node__V = (function(n) {
  var x1 = n;
  matchEnd8: {
    if (ScalaJS.is.scala_xml_ProcInstr(x1)) {
      var x2 = ScalaJS.as.scala_xml_ProcInstr(x1);
      this.result__Lscala_xml_NodeBuffer().$$amp$plus__O__Lscala_xml_NodeBuffer(this.procInstr__I__T__T__Lscala_xml_ProcInstr(0, x2.target__T(), x2.text__T()));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd8
    };
    if (ScalaJS.is.scala_xml_Comment(x1)) {
      var x3 = ScalaJS.as.scala_xml_Comment(x1);
      this.result__Lscala_xml_NodeBuffer().$$amp$plus__O__Lscala_xml_NodeBuffer(this.comment__I__T__Lscala_xml_Comment(0, x3.text__T()));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd8
    };
    if (ScalaJS.is.scala_xml_Text(x1)) {
      var x4 = ScalaJS.as.scala_xml_Text(x1);
      this.result__Lscala_xml_NodeBuffer().$$amp$plus__O__Lscala_xml_NodeBuffer(this.text__I__T__Lscala_xml_Text(0, ScalaJS.as.java_lang_String(x4.data__O())));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd8
    };
    if (ScalaJS.is.scala_xml_EntityRef(x1)) {
      var x5 = ScalaJS.as.scala_xml_EntityRef(x1);
      this.result__Lscala_xml_NodeBuffer().$$amp$plus__O__Lscala_xml_NodeBuffer(this.entityRef__I__T__Lscala_xml_EntityRef(0, x5.entityName__T()));
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd8
    };
    if (ScalaJS.is.scala_xml_Elem(x1)) {
      var x6 = ScalaJS.as.scala_xml_Elem(x1);
      this.elemStart__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__V(0, x6.prefix__T(), x6.label__T(), x6.attributes__Lscala_xml_MetaData(), x6.scope__Lscala_xml_NamespaceBinding());
      var old = this.result__Lscala_xml_NodeBuffer();
      this.result$und$eq__Lscala_xml_NodeBuffer__V(new ScalaJS.c.scala_xml_NodeBuffer().init___());
      x6.child__Lscala_collection_Seq().foreach__Lscala_Function1__V(new ScalaJS.c.scala_scalajs_runtime_AnonFunction1().init___Lscala_scalajs_js_Function1((function(arg$outer) {
        return (function(m) {
          arg$outer.traverse__Lscala_xml_Node__V(m);
          return ScalaJS.bV(undefined)
        })
      })(this)));
      this.result$und$eq__Lscala_xml_NodeBuffer__V(old.$$amp$plus__O__Lscala_xml_NodeBuffer(this.elem__I__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Z__Lscala_xml_NodeSeq__Lscala_xml_NodeSeq(0, x6.prefix__T(), x6.label__T(), x6.attributes__Lscala_xml_MetaData(), x6.scope__Lscala_xml_NamespaceBinding(), x6.minimizeEmpty__Z(), ScalaJS.modules.scala_xml_NodeSeq().fromSeq__Lscala_collection_Seq__Lscala_xml_NodeSeq(this.result__Lscala_xml_NodeBuffer())).toList__Lscala_collection_immutable_List()));
      this.elemEnd__I__T__T__V(0, x6.prefix__T(), x6.label__T());
      ScalaJS.modules.scala_runtime_BoxedUnit().UNIT__Lscala_runtime_BoxedUnit();
      break matchEnd8
    };
    throw new ScalaJS.c.scala_MatchError().init___O(x1)
  }
});
ScalaJS.c.scala_xml_factory_Binder.prototype.validate__Lscala_xml_Node__Lscala_xml_Node = (function(n) {
  this.rootLabel$und$eq__T__V(n.label__T());
  this.traverse__Lscala_xml_Node__V(n);
  return ScalaJS.as.scala_xml_Node(this.result__Lscala_xml_NodeBuffer().apply__I__O(0))
});
ScalaJS.c.scala_xml_factory_Binder.prototype.text__I__T__Lscala_xml_NodeSeq = (function(pos, txt) {
  return this.text__I__T__Lscala_xml_Text(pos, txt)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.entityRef__I__T__Lscala_xml_NodeSeq = (function(pos, n) {
  return this.entityRef__I__T__Lscala_xml_EntityRef(pos, n)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.comment__I__T__Lscala_xml_NodeSeq = (function(pos, comment) {
  return this.comment__I__T__Lscala_xml_Comment(pos, comment)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.procInstr__I__T__T__Lscala_xml_NodeSeq = (function(pos, target, txt) {
  return this.procInstr__I__T__T__Lscala_xml_ProcInstr(pos, target, txt)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.init___Z = (function(preserveWS) {
  this.preserveWS$3 = preserveWS;
  ScalaJS.c.scala_xml_parsing_ValidatingMarkupHandler.prototype.init___.call(this);
  this.result$3 = new ScalaJS.c.scala_xml_NodeBuffer().init___();
  return this
});
ScalaJS.c.scala_xml_factory_Binder.prototype.validate__Lscala_xml_Node__ = (function(n) {
  return this.validate__Lscala_xml_Node__Lscala_xml_Node(n)
});
ScalaJS.c.scala_xml_factory_Binder.prototype.traverse__Lscala_xml_Node__ = (function(n$2) {
  return ScalaJS.bV(this.traverse__Lscala_xml_Node__V(n$2))
});
ScalaJS.c.scala_xml_factory_Binder.prototype.result$und$eq__Lscala_xml_NodeBuffer__ = (function(x$1) {
  return ScalaJS.bV(this.result$und$eq__Lscala_xml_NodeBuffer__V(x$1))
});
ScalaJS.c.scala_xml_factory_Binder.prototype.result__ = (function() {
  return this.result__Lscala_xml_NodeBuffer()
});
ScalaJS.c.scala_xml_factory_Binder.prototype.preserveWS__ = (function() {
  return ScalaJS.bZ(this.preserveWS__Z())
});
/** @constructor */
ScalaJS.inheritable.scala_xml_factory_Binder = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_factory_Binder.prototype = ScalaJS.c.scala_xml_factory_Binder.prototype;
ScalaJS.is.scala_xml_factory_Binder = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_factory_Binder)))
});
ScalaJS.as.scala_xml_factory_Binder = (function(obj) {
  if ((ScalaJS.is.scala_xml_factory_Binder(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.factory.Binder")
  }
});
ScalaJS.isArrayOf.scala_xml_factory_Binder = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_factory_Binder)))
});
ScalaJS.asArrayOf.scala_xml_factory_Binder = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_factory_Binder(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.factory.Binder;", depth)
  }
});
ScalaJS.data.scala_xml_factory_Binder = new ScalaJS.ClassTypeData({
  scala_xml_factory_Binder: 0
}, false, "scala.xml.factory.Binder", ScalaJS.data.scala_xml_parsing_ValidatingMarkupHandler, {
  scala_xml_factory_Binder: 1,
  scala_xml_parsing_ValidatingMarkupHandler: 1,
  scala_xml_parsing_MarkupHandler: 1,
  scala_util_logging_Logged: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_factory_Binder.prototype.$classData = ScalaJS.data.scala_xml_factory_Binder;
//@ sourceMappingURL=Binder.js.map
