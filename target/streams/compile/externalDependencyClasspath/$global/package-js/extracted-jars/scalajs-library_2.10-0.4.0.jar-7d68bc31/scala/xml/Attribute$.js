/** @constructor */
ScalaJS.c.scala_xml_Attribute$ = (function() {
  ScalaJS.c.java_lang_Object.call(this)
});
ScalaJS.c.scala_xml_Attribute$.prototype = new ScalaJS.inheritable.java_lang_Object();
ScalaJS.c.scala_xml_Attribute$.prototype.constructor = ScalaJS.c.scala_xml_Attribute$;
ScalaJS.c.scala_xml_Attribute$.prototype.unapply__Lscala_xml_Attribute__Lscala_Option = (function(x) {
  var x1 = x;
  if (ScalaJS.is.scala_xml_PrefixedAttribute(x1)) {
    var x3 = ScalaJS.as.scala_xml_PrefixedAttribute(x1);
    var o11 = ScalaJS.modules.scala_xml_PrefixedAttribute().unapply__Lscala_xml_PrefixedAttribute__Lscala_Some(x3);
    if ((!o11.isEmpty__Z())) {
      var key = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple4(o11.get__O()).$$und2__O());
      var value = ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_Tuple4(o11.get__O()).$$und3__O());
      var next = ScalaJS.as.scala_xml_MetaData(ScalaJS.as.scala_Tuple4(o11.get__O()).$$und4__O());
      return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(key, value, next))
    }
  };
  if (ScalaJS.is.scala_xml_UnprefixedAttribute(x1)) {
    var x5 = ScalaJS.as.scala_xml_UnprefixedAttribute(x1);
    var o13 = ScalaJS.modules.scala_xml_UnprefixedAttribute().unapply__Lscala_xml_UnprefixedAttribute__Lscala_Some(x5);
    if ((!o13.isEmpty__Z())) {
      var key$2 = ScalaJS.as.java_lang_String(ScalaJS.as.scala_Tuple3(o13.get__O()).$$und1__O());
      var value$2 = ScalaJS.as.scala_collection_Seq(ScalaJS.as.scala_Tuple3(o13.get__O()).$$und2__O());
      var next$2 = ScalaJS.as.scala_xml_MetaData(ScalaJS.as.scala_Tuple3(o13.get__O()).$$und3__O());
      return new ScalaJS.c.scala_Some().init___O(new ScalaJS.c.scala_Tuple3().init___O__O__O(key$2, value$2, next$2))
    }
  };
  return ScalaJS.modules.scala_None()
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute = (function(key, value, next) {
  return new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__Lscala_collection_Seq__Lscala_xml_MetaData(key, value, next)
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__T__T__Lscala_xml_MetaData__Lscala_xml_Attribute = (function(pre, key, value, next) {
  if ((ScalaJS.anyRefEqEq(pre, null) || ScalaJS.anyRefEqEq(pre, ""))) {
    return new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__T__Lscala_xml_MetaData(key, value, next)
  } else {
    return new ScalaJS.c.scala_xml_PrefixedAttribute().init___T__T__T__Lscala_xml_MetaData(pre, key, value, next)
  }
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute = (function(pre, key, value, next) {
  if ((ScalaJS.anyRefEqEq(pre, null) || ScalaJS.anyRefEqEq(pre, ""))) {
    return new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__Lscala_collection_Seq__Lscala_xml_MetaData(key, value, next)
  } else {
    return new ScalaJS.c.scala_xml_PrefixedAttribute().init___T__T__Lscala_collection_Seq__Lscala_xml_MetaData(pre, key, value, next)
  }
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__Lscala_Option__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute = (function(pre, key, value, next) {
  var x1 = pre;
  if (ScalaJS.anyRefEqEq(ScalaJS.modules.scala_None(), x1)) {
    return new ScalaJS.c.scala_xml_UnprefixedAttribute().init___T__Lscala_collection_Seq__Lscala_xml_MetaData(key, value, next)
  };
  if (ScalaJS.is.scala_Some(x1)) {
    var x2 = ScalaJS.as.scala_Some(x1);
    var p = ScalaJS.as.java_lang_String(x2.x__O());
    return new ScalaJS.c.scala_xml_PrefixedAttribute().init___T__T__Lscala_collection_Seq__Lscala_xml_MetaData(p, key, value, next)
  };
  throw new ScalaJS.c.scala_MatchError().init___O(x1)
});
ScalaJS.c.scala_xml_Attribute$.prototype.readResolve__p1__O = (function() {
  return ScalaJS.modules.scala_xml_Attribute()
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__Lscala_Option__T__Lscala_collection_Seq__Lscala_xml_MetaData__ = (function(pre, key, value, next) {
  return this.apply__Lscala_Option__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute(pre, key, value, next)
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__T__Lscala_collection_Seq__Lscala_xml_MetaData__ = (function(pre$2, key$2, value$2, next$2) {
  return this.apply__T__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute(pre$2, key$2, value$2, next$2)
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__T__T__Lscala_xml_MetaData__ = (function(pre$3, key$3, value$3, next$3) {
  return this.apply__T__T__T__Lscala_xml_MetaData__Lscala_xml_Attribute(pre$3, key$3, value$3, next$3)
});
ScalaJS.c.scala_xml_Attribute$.prototype.apply__T__Lscala_collection_Seq__Lscala_xml_MetaData__ = (function(key$4, value$4, next$4) {
  return this.apply__T__Lscala_collection_Seq__Lscala_xml_MetaData__Lscala_xml_Attribute(key$4, value$4, next$4)
});
ScalaJS.c.scala_xml_Attribute$.prototype.unapply__Lscala_xml_Attribute__ = (function(x) {
  return this.unapply__Lscala_xml_Attribute__Lscala_Option(x)
});
/** @constructor */
ScalaJS.inheritable.scala_xml_Attribute$ = (function() {
  /*<skip>*/
});
ScalaJS.inheritable.scala_xml_Attribute$.prototype = ScalaJS.c.scala_xml_Attribute$.prototype;
ScalaJS.is.scala_xml_Attribute$ = (function(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scala_xml_Attribute$)))
});
ScalaJS.as.scala_xml_Attribute$ = (function(obj) {
  if ((ScalaJS.is.scala_xml_Attribute$(obj) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwClassCastException(obj, "scala.xml.Attribute")
  }
});
ScalaJS.isArrayOf.scala_xml_Attribute$ = (function(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scala_xml_Attribute$)))
});
ScalaJS.asArrayOf.scala_xml_Attribute$ = (function(obj, depth) {
  if ((ScalaJS.isArrayOf.scala_xml_Attribute$(obj, depth) || (obj === null))) {
    return obj
  } else {
    ScalaJS.throwArrayCastException(obj, "Lscala.xml.Attribute;", depth)
  }
});
ScalaJS.data.scala_xml_Attribute$ = new ScalaJS.ClassTypeData({
  scala_xml_Attribute$: 0
}, false, "scala.xml.Attribute$", ScalaJS.data.java_lang_Object, {
  scala_xml_Attribute$: 1,
  scala_Serializable: 1,
  java_io_Serializable: 1,
  java_lang_Object: 1
});
ScalaJS.c.scala_xml_Attribute$.prototype.$classData = ScalaJS.data.scala_xml_Attribute$;
ScalaJS.moduleInstances.scala_xml_Attribute = undefined;
ScalaJS.modules.scala_xml_Attribute = (function() {
  if ((!ScalaJS.moduleInstances.scala_xml_Attribute)) {
    ScalaJS.moduleInstances.scala_xml_Attribute = new ScalaJS.c.scala_xml_Attribute$().init___()
  };
  return ScalaJS.moduleInstances.scala_xml_Attribute
});
//@ sourceMappingURL=Attribute$.js.map
