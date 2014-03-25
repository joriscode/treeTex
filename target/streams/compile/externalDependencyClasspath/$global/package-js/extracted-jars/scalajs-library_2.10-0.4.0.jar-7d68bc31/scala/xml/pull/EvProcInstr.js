/** @constructor */
ScalaJS.c.scala_xml_pull_EvProcInstr = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.target$1 = null;
  this.text$1 = null
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.constructor = ScalaJS.c.scala_xml_pull_EvProcInstr;
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.target__T = (function() {
  return this.target$1
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.text__T = (function() {
  return this.text$1
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.copy__T__T__Lscala_xml_pull_EvProcInstr = (function(target, text) {
  return new ScalaJS.c.scala_xml_pull_EvProcInstr().init___T__T(target, text)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.copy$default$1__T = (function() {
  return this.target__T()
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.copy$default$2__T = (function() {
  return this.text__T()
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productPrefix__T = (function() {
  return "EvProcInstr"
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productArity__I = (function() {
  return 2
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.target__T();
        break
      };
    case 1:
      {
        return this.text__T();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_pull_EvProcInstr(x$1)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_pull_EvProcInstr(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var EvProcInstr$1 = ScalaJS.as.scala_xml_pull_EvProcInstr(x$1);
      return ((ScalaJS.anyRefEqEq(this.target__T(), EvProcInstr$1.target__T()) && ScalaJS.anyRefEqEq(this.text__T(), EvProcInstr$1.text__T())) && EvProcInstr$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.init___T__T = (function(target, text) {
  this.target$1 = target;
  this.text$1 = text;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.copy__T__T__ = (function(target, text) {
  return this.copy__T__T__Lscala_xml_pull_EvProcInstr(target, text)
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.text__ = (function() {
  return this.text__T()
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.target__ = (function() {
  return this.target__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvProcInstr = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvProcInstr.prototype = ScalaJS.c.scala_xml_pull_EvProcInstr.prototype;
ScalaJS.is.scala_xml_pull_EvProcInstr = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvProcInstr)))
});
ScalaJS.as.scala_xml_pull_EvProcInstr = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvProcInstr(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvProcInstr")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvProcInstr = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvProcInstr)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvProcInstr = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvProcInstr(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvProcInstr;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvProcInstr = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvProcInstr: 0
}, false, "scala.xml.pull.EvProcInstr", ScalaJS.data.java_lang_Object, {
  scala_xml_pull_EvProcInstr: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_pull_XMLEvent: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvProcInstr.prototype.$classData = ScalaJS.data.scala_xml_pull_EvProcInstr;
//@ sourceMappingURL=EvProcInstr.js.map
