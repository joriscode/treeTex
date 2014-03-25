/** @constructor */
ScalaJS.c.scala_xml_pull_EvElemStart = (function() {
  ScalaJS.c.java_lang_Object.call(this);
  this.pre$1 = null;
  this.label$1 = null;
  this.attrs$1 = null;
  this.scope$1 = null
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.constructor = ScalaJS.c.scala_xml_pull_EvElemStart;
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.pre__T = (function() {
  return this.pre$1
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.label__T = (function() {
  return this.label$1
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.attrs__Lscala_xml_MetaData = (function() {
  return this.attrs$1
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.scope__Lscala_xml_NamespaceBinding = (function() {
  return this.scope$1
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_pull_EvElemStart = (function(pre, label, attrs, scope) {
  return new ScalaJS.c.scala_xml_pull_EvElemStart().init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding(pre, label, attrs, scope)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy$default$1__T = (function() {
  return this.pre__T()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy$default$2__T = (function() {
  return this.label__T()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy$default$3__Lscala_xml_MetaData = (function() {
  return this.attrs__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy$default$4__Lscala_xml_NamespaceBinding = (function() {
  return this.scope__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productPrefix__T = (function() {
  return "EvElemStart"
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productArity__I = (function() {
  return 4
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productElement__I__O = (function(x$1) {
  var x1 = x$1;
  switch (x1) {
    case 0:
      {
        return this.pre__T();
        break
      };
    case 1:
      {
        return this.label__T();
        break
      };
    case 2:
      {
        return this.attrs__Lscala_xml_MetaData();
        break
      };
    case 3:
      {
        return this.scope__Lscala_xml_NamespaceBinding();
        break
      };
    default:
      throw new ScalaJS.c.java_lang_IndexOutOfBoundsException().init___T(ScalaJS.objectToString(ScalaJS.bI(x$1)));
  }
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productIterator__Lscala_collection_Iterator = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().typedProductIterator__Lscala_Product__Lscala_collection_Iterator(this)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.canEqual__O__Z = (function(x$1) {
  return ScalaJS.is.scala_xml_pull_EvElemStart(x$1)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.hashCode__I = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undhashCode__Lscala_Product__I(this)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.toString__T = (function() {
  return ScalaJS.modules.scala_runtime_ScalaRunTime().$$undtoString__Lscala_Product__T(this)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.equals__O__Z = (function(x$1) {
  if ((this === x$1)) {
    return true
  } else {
    var x1 = x$1;
    matchEnd4: {
      if (ScalaJS.is.scala_xml_pull_EvElemStart(x1)) {
        var jsx$1 = true;
        break matchEnd4
      };
      var jsx$1 = false;
      break matchEnd4
    };
    if (jsx$1) {
      var EvElemStart$1 = ScalaJS.as.scala_xml_pull_EvElemStart(x$1);
      return ((((ScalaJS.anyRefEqEq(this.pre__T(), EvElemStart$1.pre__T()) && ScalaJS.anyRefEqEq(this.label__T(), EvElemStart$1.label__T())) && ScalaJS.anyRefEqEq(this.attrs__Lscala_xml_MetaData(), EvElemStart$1.attrs__Lscala_xml_MetaData())) && ScalaJS.anyRefEqEq(this.scope__Lscala_xml_NamespaceBinding(), EvElemStart$1.scope__Lscala_xml_NamespaceBinding())) && EvElemStart$1.canEqual__O__Z(this))
    } else {
      return false
    }
  }
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.init___T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding = (function(pre, label, attrs, scope) {
  this.pre$1 = pre;
  this.label$1 = label;
  this.attrs$1 = attrs;
  this.scope$1 = scope;
  ScalaJS.c.java_lang_Object.prototype.init___.call(this);
  ScalaJS.impls.scala_Product$class__$init$__Lscala_Product__V(this);
  return this
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.canEqual__O__ = (function(x$1) {
  return ScalaJS.bZ(this.canEqual__O__Z(x$1))
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productIterator__ = (function() {
  return this.productIterator__Lscala_collection_Iterator()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productElement__I__ = (function(x$1$2) {
  return this.productElement__I__O(x$1$2)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productArity__ = (function() {
  return ScalaJS.bI(this.productArity__I())
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.productPrefix__ = (function() {
  return this.productPrefix__T()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__ = (function(pre, label, attrs, scope) {
  return this.copy__T__T__Lscala_xml_MetaData__Lscala_xml_NamespaceBinding__Lscala_xml_pull_EvElemStart(pre, label, attrs, scope)
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.scope__ = (function() {
  return this.scope__Lscala_xml_NamespaceBinding()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.attrs__ = (function() {
  return this.attrs__Lscala_xml_MetaData()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.label__ = (function() {
  return this.label__T()
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.pre__ = (function() {
  return this.pre__T()
});
/** @constructor */
ScalaJS.inheritable.scala_xml_pull_EvElemStart = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_pull_EvElemStart.prototype = ScalaJS.c.scala_xml_pull_EvElemStart.prototype;
ScalaJS.is.scala_xml_pull_EvElemStart = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_pull_EvElemStart)))
});
ScalaJS.as.scala_xml_pull_EvElemStart = (function(obj) {
  if ((ScalaJS.is.scala_xml_pull_EvElemStart(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.pull.EvElemStart")
  }
});
ScalaJS.isArrayOf.scala_xml_pull_EvElemStart = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_pull_EvElemStart)))
});
ScalaJS.asArrayOf.scala_xml_pull_EvElemStart = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_pull_EvElemStart(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.pull.EvElemStart;", depth)
  }
});
ScalaJS.data.scala_xml_pull_EvElemStart = new ScalaJS.ClassTypeData({
  scala_xml_pull_EvElemStart: 0
}, false, "scala.xml.pull.EvElemStart", ScalaJS.data.java_lang_Object, {
  scala_xml_pull_EvElemStart: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  scala_Product: 1,
  scala_Equals: 1,
  scala_xml_pull_XMLEvent: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_pull_EvElemStart.prototype.$classData = ScalaJS.data.scala_xml_pull_EvElemStart;
//@ sourceMappingURL=EvElemStart.js.map
